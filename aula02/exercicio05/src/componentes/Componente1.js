import React from 'react';
import { Lista } from './Lista';

export class Componente1 extends React.Component {
    
    state = {
        isReact : true,
        texto: 'Texto',
        list : ['react', 'angular', 'vue', 'kotlin']
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                isReact : false,
                list: ['C#', 'Kotlin', 'Swift', 'Vue.Js', 'Angular', 'React']
            })
        }, 5000);
    }

    getLista(){
        const {list} = this.state;

        return list.map((i, index) => (<Lista key={index} item={i} />));
    }

    setTexto(evento){
        this.setState({texto: evento.target.value});
    }
    
    render() {
        const { isReact, texto } = this.state;

        return (
            <div>
                <h1 className="fonte">Meu Primeiro Componente {isReact ? 'React.js' : 'Outra lib'}</h1>
                <h2 className="fonte">{this.props.teste}</h2>
                <label htmlFor="texto">Digite seu texto: </label>
                <input type="text" id="texto" value={texto} onChange={this.setTexto.bind(this)}/>
                <button type="button" onClick={_ => alert(texto)}>Enviar</button>
                <button type="button" onClick={_ => this.setState({texto: ''})}>Limpar</button>
                <ul>
                    {this.getLista()}
                </ul>
            </div>
        )
    }
}