import './CampoTexto.scss';

const CampoTexto = (props) => {

    // const concatenarString = `Digite o seu ${props.label}`;

    const aoDigitar = (event) => {
        props.aoAlterar(event.target.value);
    }

    return (
        <div className="campo_texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} type={props.type} />
        </div>
    );
}

export default CampoTexto;