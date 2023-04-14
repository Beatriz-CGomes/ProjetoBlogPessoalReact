import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    return (
        <>

            <AppBar position="static" style={{ backgroundColor: '#FFE835', boxShadow: 'none', height : '60px' }}>
                <Toolbar>
                    <Box style={{ cursor: "pointer", marginLeft: '40px', color: '#363636', fontWeight: 'bold', fontFamily: 'Calibri' }} className='itens' >
                        <Typography variant="h5">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="center" className='cursor'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='itens'>
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='itens'>
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='itens'>
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='itens'>
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='itens'>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )

}


export default Navbar;