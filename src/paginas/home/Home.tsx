import React from 'react';
import {Paper, Button, Grid, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';



function Home() { 
  return (
    <>
 
 <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#363636", fontWeight: "bold", fontFamily: 'Calibri' }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#363636", fontFamily: 'Calibri' }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#FFE835", backgroundColor: "#FFE835", color: "black",  fontWeight: "bold", fontFamily: 'Calibri', border : 'none'}}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

    </>
  );
}

export default Home;