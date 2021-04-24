import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';
import { AgrupamentoCursos } from '../componentes/cursos/Agrupamento';

export class CursosScreen extends React.Component {

    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos" />
                <AgrupamentoCursos />
            </div>
        );
    }
}