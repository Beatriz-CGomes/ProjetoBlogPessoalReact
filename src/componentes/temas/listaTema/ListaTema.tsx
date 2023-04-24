import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    //Aqui está verificando se o token está vazio, precisa saber se está logado ou não
    useEffect(() => {
        if (token == "") {
            alert("você precisa estar logado")
            history("/login")
        }
    }, [token])

    //
    async function getTema() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    // Quando uma varivel sofre uma alteração ele dispara uma função 
    useEffect(() => {
        getTema()
    },
        [temas.length])

    return (
        <>

            {
                //map - permite mapear/ andar por cada objeto dentro do array e dar uma função para cada um
                temas.map(tema =>(

            <Box m={2} >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {tema.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >

                        <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className='buttom31' >
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className='buttom21'>
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
          ))}
        </>
    );
}


export default ListaTema;