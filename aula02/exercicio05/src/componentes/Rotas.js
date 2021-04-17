import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Componente1 } from './Componente1';
import { Componente2 } from './Componente2';

export const Rotas = props => {
    return (
        <div>
            <nav>
                <Link to="/componente1" className="menu">Componente 1</Link>
                <Link to="/componente2" className="menu">Componente 2</Link>
            </nav>

            <Switch>
                <Route path='/componente1' component={Componente1} />
                <Route path='/componente2' component={Componente2} />
            </Switch>
        </div>

    );
}