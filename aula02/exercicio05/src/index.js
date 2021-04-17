import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './componentes/Rotas';

import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Rotas />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'));