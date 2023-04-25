import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';

import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';
import './DeletarTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';


function DeletarTema() {


    let history = useNavigate();
    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );



    const [tema, setTema] = useState<Tema>()



    useEffect(() => {
        if (token == "") {
            alert("você precisa estar logado")
            history("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
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

    //direciona para tela de temas, em seguida seleciona deleteId
    function sim() {
        history('/temas')
        deleteId(`/tema/${id}`, {
            Headers: {
                'Authorization': token
            }
        });
        alert('Tema deletado com sucesso')
    }

    function nao() {
        history('/temas')
    }



    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                             {tema?.descricao}
                            </Typography>
                            <Typography color="textSecondary">
                                tema
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" size='large' className='buttom31'>
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' className='buttom21'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarTema;