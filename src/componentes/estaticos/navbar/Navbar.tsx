import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuario deslogado')
        history("/login")
    }


    return (
        <>

            <AppBar position="static" style={{ backgroundColor: '#FFE835', boxShadow: 'none', height: '60px' }}>
                <Toolbar>
                    <Box style={{ cursor: "pointer", marginLeft: '40px', color: '#363636', fontWeight: 'bold', fontFamily: 'Calibri' }} className='itens' >
                        <Typography variant="h5">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="center" className='cursor'>
                        <Link to='/home' className='text-decorator-none'>                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='itens'>
                                Home
                            </Typography>
                        </Box>
                        </Link>

                        <Link to='/postagens' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='itens'>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='itens'>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='itens'>
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>


                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" className='itens'>
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )

}


export default Navbar;