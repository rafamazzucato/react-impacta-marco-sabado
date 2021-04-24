import React, { useState, useEffect } from 'react';
import { Cabecalho } from '../componentes/Cabecalho';
import { ListaCursos } from '../componentes/cursos/Lista';
import { executaRequisicao } from '../services/api';

export const HomeScreen = props => {

    const [cursos, setCursos] = useState([]);
    const getCursos = async () => {
        try {
            const response = await executaRequisicao('cursos', 'GET');

            if (response && response.data) {
                setCursos(response.data);
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getCursos();
    }, []);

    return (
        <div className="container">
            <Cabecalho titulo="Cursos ABC" subtitulo="a maior plataforma de cursos online" />
            <ListaCursos cursos={cursos} isPublic={true} />
        </div>
    );
}


