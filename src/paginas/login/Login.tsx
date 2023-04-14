import React from 'react';
import './Login.css'
import { Grid } from '@material-ui/core';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css'


function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6} >
                <Box paddingX={10} className='login-top'>
                    <form className='color'>
                        <Typography variant="h5" style={{ color: '#363636', fontFamily: 'Calibri', textAlign: 'center', fontWeight: 'bold'}}>Bem-Vindo</Typography>
                        <TextField id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box textAlign='center' marginTop={2}>
                            <Link to='/home' className='text-decorator-none'>
                                <Button className='buttom' type='submit' style={{ backgroundColor: '#FFE835', color: 'white', fontFamily: 'Calibri', fontWeight: 'bold' }}>
                                    Logar
                                </Button >
                            </Link>
                        </Box>


                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2} className='color'>
                        <Box marginRight={1} >
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ color : '#363636'}}>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight : 'bold',  color : '#363636'}}>Cadastra-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>

    );
}


export default Login;