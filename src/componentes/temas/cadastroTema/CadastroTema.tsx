import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import './CadastroTema.css';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';



function CadastroTema() {

    let history = useNavigate();

    // capturar os parametros enviados pela url, e assim  capturar o ID 
    const { id } = useParams<{ id: string }>();
    //captura otoken no localStoroge
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    //na medida que o id for diferente de 0 os id são modificados automaticamente
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    //cuida do ciclo de vida do token
    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login")
        }
    }, [token])


    //ficar monitorando o id, e se tiver será pego pelo FindID
    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }


    //função responsavel por capturar os valores digitados no formulário
   async function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        //previni para não atualizar a tela
        e.preventDefault()
        //imprimi no console o dados que foram armazenados no setTema
        console.log("temas" + JSON.stringify(tema))

        //se existe um id ele vai tentar atualizar o tema, tem uma rota
        if (id != undefined) {
            console.log(tema)
            //atualiza o tema -- rota do back
            // rota da api, os dados que pretende cadastrar, captura objeto atualizado e passa para o Header o token de atualização
          
          
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            //aqui siginifica que não existe um tema cadastro com id ainda
        } else {
            //aqui irá fazer um novo cadastro com post, passando pela mesma rota
            
            try{

            } catch{

            }
            
            post(`/temas`, tema, setTema, {
                Headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } back() // volta para página de temas
    }

    function back() {
        history(`/temas`)
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='buttom3'>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;