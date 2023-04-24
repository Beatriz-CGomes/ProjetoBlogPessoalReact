import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {

    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');

    //pega os temas já cadastrados
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")

        }
    }, [token])

    // grava um tema por id
    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })

    //efetua o cadastro definitivo das postagens
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null
    })

    // o select está atribuido a postagem
    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    // retorna o tema por id pelo findById e getTemas retorna todas os temas.
    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    //Busca o api pelo id e coloca na barra 
    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    // preenche atraves do input, mudança atraves dos preenchimentos do cliente.
    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    // envia as informações
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        //atualização da postagem
        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
            //criação da postagem
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    // essa função é para voltar para a página de postagens
    function back() {
        history('/posts')
    }





    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label" 
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`,setTema,{
                            headers:{
                                'Authorization':token
                            }
                        })}>
                            {
                                temas.map(tema => {
                                    <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                })
                            }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" className='buttom3'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;