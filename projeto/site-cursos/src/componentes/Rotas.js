import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContatoScreen } from '../paginas/Contato';
import { CursosScreen } from '../paginas/Cursos';
import { HomeScreen } from '../paginas/Home';

export const Rotas = props => (
    <Switch>
        <Route path='/cursos' component={CursosScreen}/>
        <Route path='/contato' component={ContatoScreen}/>
        <Route path='*' component={HomeScreen}/>
    </Switch>
)