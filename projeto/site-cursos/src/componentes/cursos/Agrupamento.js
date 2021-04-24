import React from 'react';
import { FormularioCursos } from './Formulario';
import { ListaCursos } from './Lista';
import Swal from 'sweetalert2';
import { executaRequisicao } from '../../services/api';

const URL = 'cursos';

export class AgrupamentoCursos extends React.Component {

    constructor(props) {
        super(props);

        this.excluirCurso = this.excluirCurso.bind(this);
        this.setFormValue = this.setFormValue.bind(this);
        this.salvar = this.salvar.bind(this);
        this.limpar = this.limpar.bind(this);
        this.selecionarCurso = this.selecionarCurso.bind(this);
    }

    initialState = {
        _id: null,
        codigo: 0,
        descricao: '',
        cargaHoraria: 0,
        preco: 0,
        categoria: 'INFORMATICA'
    }

    state = {
        ...this.initialState,
        cursos: []
    }

    limpar(evento) {
        if (evento) {
            evento.preventDefault();
        }
        this.setState(this.initialState)
    }

    async componentDidMount() {
        await this.getCursos();
    }

    async getCursos() {
        try {
            const response = await executaRequisicao(URL, 'GET');
            if (response && response.data) {
                this.setState({ cursos: response.data });
            }
        } catch (e) {
            console.log(e);
        }
    }

    async excluirCurso(_id) {
        Swal.fire({
            title: 'Você tem certeza?',
            text: 'Após removido não poderá ser utilizado novamente!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Cancelar'
        }).then(result => {
            if (result.value) {
                return executaRequisicao(URL + '/' + _id, 'DELETE');
            }
        }).then(response => {
            if (response) {
                this.getCursos();
                Swal.fire(
                    'Sucesso!',
                    'Curso deletado com sucesso.',
                    'success'
                );
            }
        }).catch(error => {
            console.log(error);
            Swal.fire(
                'Ops!',
                'Não foi possível deletar o curso selecionado, tente novamente ou entre em contato com o administrador.',
                'error'
            );
        });
    }

    setFormValue(evento) {
        switch (evento.target.id) {
            case 'codigo': return this.setState({ codigo: evento.target.value });
            case 'descricao': return this.setState({ descricao: evento.target.value });
            case 'cargaHoraria': return this.setState({ cargaHoraria: evento.target.value });
            case 'preco': return this.setState({ preco: evento.target.value });
            case 'categoria': return this.setState({ categoria: evento.target.value });
            default: return;
        }
    }

    selecionarCurso(curso) {
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        });
    }

    async salvar(evento) {
        try {
            if (evento) {
                evento.preventDefault();
            }
            const { _id, codigo, descricao, cargaHoraria, preco, categoria } = this.state;

            const errors = [];

            if (!codigo || codigo < 0) {
                errors.push('Código inválido');
            }

            if (!descricao || descricao.length < 3) {
                errors.push('Descrição inválida');
            }

            if (!cargaHoraria || cargaHoraria < 4) {
                errors.push('Carga horária inválida');
            }

            if (preco < 0) {
                errors.push('Preço inválido');
            }

            if (!categoria || categoria.length < 3) {
                errors.push('Categoria inválida');
            }

            if (errors && errors.length > 0) {
                Swal.fire(
                    'Dados inválidos!',
                    errors.join('<br/>'),
                    'error'
                );
                return;
            }

            const body = {
                codigo,
                descricao,
                cargaHoraria,
                preco,
                categoria
            }
            if (_id) {
                await executaRequisicao('cursos/' + _id, 'PUT', body);
            } else {
                await executaRequisicao('cursos', 'POST', body);
            }

            this.getCursos();
            this.limpar();
            Swal.fire(
                'Sucesso!',
                `Curso ${_id ? 'atualizado' : 'cadastrado'} com sucesso.`,
                'success'
            );
        } catch (e) {
            console.log(e);
            Swal.fire(
                'Ops!',
                'Não foi cadastrar o curso, tente novamente ou entre em contato com o administrador.',
                'error'
            );
        }
    }

    render() {
        const { _id, cursos, codigo, descricao, cargaHoraria, preco, categoria } = this.state;

        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormularioCursos
                        codigo={codigo}
                        descricao={descricao}
                        cargaHoraria={cargaHoraria}
                        preco={preco}
                        categoria={categoria}
                        _id={_id}

                        setFormValue={this.setFormValue}
                        salvar={this.salvar}
                        limpar={this.limpar}
                    />
                </div>
                <div className="col-md-6">
                    <ListaCursos
                        cursos={cursos}
                        excluirCurso={this.excluirCurso}
                        selecionarCurso={this.selecionarCurso}
                    />
                </div>
            </div>
        );
    }
}