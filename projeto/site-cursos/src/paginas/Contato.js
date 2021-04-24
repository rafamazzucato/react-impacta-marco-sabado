import React from 'react';
import { Cabecalho } from '../componentes/Cabecalho';

export const ContatoScreen = props => (
    <div className="container">
        <Cabecalho titulo="Contato" subtitulo="envie sua mensagem e responderemos suas dúvidas" />
        <div>
            <form>
                <div className="form-group row"> <label htmlFor="data"
                    className="col-sm-3 col-form-label">Data:</label> <div className="col-sm-5 col-6">
                        <input type="date" className="form-control" id="data"
                            value={props.data} /> </div>
                </div>
                <div className="form-group row"> <label htmlFor="nome"
                    className="col-sm-3 col-form-label">Nome:</label> <div className="col-sm-9">
                        <input type="text" className="form-control" id="nome"
                            value={props.nome} /> </div>
                </div>
                <div className="form-group row"> <label htmlFor="email"
                    className="col-sm-3 col-form-label">Email:</label> <div className="col-sm-9">
                        <input type="email" className="form-control" id="email"
                            value={props.email} /> </div>
                </div>
                <div className="form-group row"> <label htmlFor="assunto"
                    className="col-sm-3 col-form-label">Assunto:</label> <div className="col-sm-9">
                        <textarea className="form-control" id="assunto" rows="5"
                            value={props.assunto} /> </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3">Adicionar</button>
                </div>
            </form>
        </div>
    </div>
)