import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Login } from './Login';


export const Menu = props => {
    const accessToken = localStorage.getItem('accessToken');
    const [token, setToken] = useState(accessToken);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    if (accessToken !== token) {
        setToken(accessToken);
        props.setToken(accessToken);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    ABC Courses
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        {token &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/cursos">Cursos</Link>
                            </li>
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>
                {!token ?
                    <button type="button" className="btn btn-primary" onClick={toggleModal}>Entrar</button>
                    :
                    <button type="button" className="btn btn-secondary" onClick={e => {
                        localStorage.removeItem('accessToken')
                        setToken('');
                    }}>
                        Sair
                    </button>
                }
            </nav>
            {showModal === true ?
                <Login toggleModal={toggleModal} />
                : null}
        </div>
    );
}