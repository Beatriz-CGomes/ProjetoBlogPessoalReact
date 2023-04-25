import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import './CadastroTema.css';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';



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
        if (token == "") {
            alert("você precisa estar logado")
            history("/login")
        }
    }, [token])


    //ficar monitorando o id, e se tiver será pego pelo FindID
    useEffect(() => {
        if (id != undefined) {
            findById(id)
        }
    }, [id])


    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            Headers: {
                'Authorization': token
            }
        })
    }


    //função responsavel por capturar os valores digitados no formulário
    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        //previni para não atualizar a tela
        e.preventDefault()
        //imprimi no console o dados que foram armazenados no setTema
        console.log("tema" + JSON.stringify(tema))

        //se existe um id ele vai tentar atualizar o tema, tem uma rota
        if (id != undefined) {
            console.log(tema)
            //atualiza o tema -- rota do back
            // rota da api, os dados que pretende cadastrar, captura objeto atualizado e passa para o Header o token de atualização
            put(`/tema`, tema, setTema, {
                Headers: {
                    'Authorization': token
                }
            })
            alert("Tema atualizado com sucesso");
            //aqui siginifica que não existe um tema cadastro com id ainda
        } else {
            //aqui irá fazer um novo cadastro com post, passando pela mesma rota
            post(`/tema`, tema, setTema, {
                Headers: {
                    'Authorization': token
                }
            })
            alert("Tema cadastrado com sucesso");
        } back() // volta par ao componete /temas
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