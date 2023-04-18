import { useState } from 'react'
import React from 'react';
import './App.css'
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import { Grid, Paper } from '@material-ui/core';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/login/cadastrousuario" element={<CadastroUsuario />} />

        </Routes>
      </div>


      <Footer />
    </ BrowserRouter>
  );
}

export default App
