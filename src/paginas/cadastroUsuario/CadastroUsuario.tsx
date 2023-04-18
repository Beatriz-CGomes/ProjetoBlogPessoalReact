import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Link, useNavigate } from 'react-router-dom';

import './CadastroUsuario.css';



function CadastroUsuario() {


    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (userResult.id != 0) {
            history('/login')
           
           
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
           await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário Cadastrado com sucesso')
        }
        else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }




    return (

        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid item xs={3} className='imagem2'>
            </Grid>


            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                    <form className='color' onSubmit={onSubmit}>
                        <Typography variant="h5" style={{ color: '#363636', fontFamily: 'Calibri', textAlign: 'center', fontWeight: 'bold' }}>Cadastra-se</Typography>

                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confimarSenha' label='Confimar Senha' variant='outlined' name='confimarSenha' margin='normal' type='password' fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Link da foto' variant="outlined" name='foto' margin="normal" fullWidth />

                        <Box textAlign='center' marginTop={2}>
                            <Link to='/login' className='text-decorator-none'>
                                <Button className='buttom2' style={{ backgroundColor: '#363636', color: 'white', fontFamily: 'Calibri', fontWeight: 'bold' }}>
                                    Cancelar
                                </Button >
                            </Link>
                            <Button className='buttom3' type='submit' style={{ backgroundColor: '#FFE835', color: '#363636', fontFamily: 'Calibri', fontWeight: 'bold' }}>
                                Cadastrar
                            </Button >
                        </Box>


                    </form>
                </Box>




            </Grid>
        </Grid>


    );
}

export default CadastroUsuario;