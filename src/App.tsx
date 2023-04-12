import { useState } from 'react'
import React from 'react';
import './App.css'
import Home from './paginas/home/Home';
import { Grid, Paper } from '@material-ui/core';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />

    </>
  );
}

export default App
