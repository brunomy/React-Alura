import './Formulario.scss';
import CampoTexto from '../CampoTexto';
import { SelectForm } from '../SelectForm';
import { Botao } from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    
    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoFormSubmit({ nome, cargo, imagem, time });

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    aoAlterar={value => setNome(value)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    type="text"/>
                <CampoTexto valor={cargo} aoAlterar={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" type="text"/>
                <CampoTexto valor={imagem} aoAlterar={valor => setImagem(valor)} label="Imagem" placeholder="Informe o end. da imagem" type="text"/>
                <SelectForm 
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}

export default Formulario;