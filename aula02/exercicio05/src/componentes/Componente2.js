import React, {useState, useEffect} from 'react';

export const Componente2 = () => {
    const [isReact, setIsReact] = useState(true);
    const [list, setList] = useState(['react', 'angular', 'vue', 'kotlin']);
    const [texto, setTexto] = useState('Texto');

    const getLista = () => {
        return list.map((item, index) => (<li key={index}>{item}</li>));
    }

    useEffect(() => {
        setTimeout(() => {
            setIsReact(false);
            setList(['C#', 'Kotlin', 'Swift', 'Vue.Js', 'Angular', 'React']);
        }, 5000);
    }, []);

    return (
        <div>
            <h2 className="fonte">Meu segundo componente {isReact ? 'React.js' : 'Outra lib'}</h2>
            <label htmlFor="texto">Digite seu texto: </label>
            <input type="text" id="texto" value={texto} onChange={e => setTexto(e.target.value)} />
            <button type="button" onClick={e => alert(texto)}>Enviar</button>
            <button type="button" onClick={e => setTexto('')}>Limpar</button>
            <ul>
                {getLista()}
            </ul>
        </div>
    );
}