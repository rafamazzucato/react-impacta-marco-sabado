import React, { useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2';

import { executaRequisicao } from '../services/api';

export const Login = props => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('password');

    const executeLogin = async () => {
        try {
            if (!user || user.length < 3 || !password || password.length < 3) {
                Swal.fire(
                    'Ops!',
                    'Favor preencher corretamente usuário e senha.',
                    'error'
                );
                return;
            }

            setLoading(true);

            const body = {
                user: user,
                password: password
            }

            const response = await executaRequisicao('login', 'POST', body);
            if (response && response.data && response.data.token) {
                localStorage.setItem('accessToken', response.data.token);
                setLoading(false);
                props.toggleModal();
                return;
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire(
                    'Ops!',
                    'Usuário e senha não encontrados, tente novamente ou entre em contato.',
                    'error'
                );
            } else {
                Swal.fire(
                    'Ops!',
                    'Ocorreu erro ao autenticar usuário, tente novamente ou entre em contato.',
                    'error'
                );
            }
        }
        setLoading(false);
    }

    return (
        <Modal show={true} onHide={props.toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Acesso ao sistema</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="form-group row">
                        <label htmlFor="user" className="col-sm-3 col-form-label">
                            Usuário:
                    </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="user"
                                value={user}
                                onChange={e => setUser(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-3 col-form-label">
                            Senha:
                    </label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary ml-3 mb-3" disabled={loading} onClick={executeLogin}>
                    {loading === false ? "Entrar" :
                        <Row className="ml-1 mr-1">
                            <span>Carregando</span>
                            <Loader
                                type="Bars"
                                color="#fff"
                                height={25}
                                width={30}
                            />
                        </Row>
                    }
                </button>
            </Modal.Footer>
        </Modal>
    );
}