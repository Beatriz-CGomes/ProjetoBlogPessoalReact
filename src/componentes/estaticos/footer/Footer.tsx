import React from 'react';
import {Grid, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';


function Footer() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="footer">
                <Grid alignItems="center" item xs={12}>
                    <Box className='caixa1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="left" className='item'>
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="left" className='item'>
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <GitHubIcon className='redes'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='caixa2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='final' >© 2020 Copyright:  Beatriz Gomes</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )

}


export default Footer;