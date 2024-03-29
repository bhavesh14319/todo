
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/app.css';
import React from 'react'
import Home from './routes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
