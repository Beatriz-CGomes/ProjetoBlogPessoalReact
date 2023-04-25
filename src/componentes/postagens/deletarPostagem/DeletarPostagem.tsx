import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';

function DeletarPostagem() {

  let history = useNavigate();
  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);



  const [post, setPosts] = useState<Postagem>()



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
    buscaId(`/postagens/${id}`, setPosts, {
      Headers: {
        'Authorization': token
      }
    })
  }

  //direciona para tela de temas, em seguida seleciona deleteId
  function sim() {
    history('/posts')
    deleteId(`/postagens/${id}`, {
      Headers: {
        'Authorization': token
      }
    });
    alert('Postagem deletada com sucesso')
  }

  function nao() {
    history('/posts')
  }




  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                {post?.titulo}
              </Typography>
              <Typography color="textSecondary" >
                Tema
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
              <Box>
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
export default DeletarPostagem;