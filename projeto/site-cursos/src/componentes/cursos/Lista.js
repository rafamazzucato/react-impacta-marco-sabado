import React from 'react';

export const ListaCursos = props => {

    const { cursos, excluirCurso, selecionarCurso, isPublic } = props;

    const exibirLinhas = () => {
        const lista = cursos || [];
        return lista.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                {isPublic ?
                    <>
                        <td>{curso.cargaHoraria}</td>
                        <td>{curso.preco}</td>
                        <td>{curso.categoria}</td>
                    </>
                    :
                    <td >
                        <button className="btn btn-success" onClick={e => selecionarCurso(curso)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={e => excluirCurso(curso._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                }
            </tr>
        ));
    }

    return (
        <div className="border-right pl-3 pr-3">
            <h3>Lista de cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        {isPublic ?
                            <>
                                <th>Carga Horária</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                            </>
                            :
                            <th></th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    );
}