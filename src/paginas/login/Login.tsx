import React, { useState, ChangeEvent, useEffect } from 'react';
import './Login.css'
import { Grid } from '@material-ui/core';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css'
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Actions';


function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            // primeiro campo pega pelo nome dele no código
            // segundo pega o valor digitado pelo cliente
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            history('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            

            alert('Usuário logado com sucesso!')
        } catch (error) {
            alert('Dados do usuário incosistentes. Erro ao logar!')
            console.log(userLogin)
        }
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6} >
                <Box paddingX={10} className='login-top'>
                
                
                    <form onSubmit={onSubmit} className='color'>


                        <Typography variant="h5" style={{ color: '#363636', fontFamily: 'Calibri', textAlign: 'center', fontWeight: 'bold' }}>Bem-Vindo</Typography>
                        <TextField   value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />


                        <Box textAlign='center' marginTop={2}>

                            <Button className='buttom' type='submit' style={{ backgroundColor: '#FFE835', color: 'white', fontFamily: 'Calibri', fontWeight: 'bold' }}>
                                Entrar
                            </Button >

                        </Box>


                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2} className='color'>
                        <Box marginRight={1} >
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ color: '#363636' }}>Não tem uma conta?</Typography>
                        </Box>

                        <Link to='cadastrousuario' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold', color: '#363636' }}>Cadastra-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>

    );
}


export default Login;