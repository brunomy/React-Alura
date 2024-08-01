import './SelectForm.scss';

export const SelectForm = (props) => {
    return (
        <div className='select_form'>
            <label>{props.label}</label>
            <select
                onChange={event => props.aoAlterar(event.target.value)}
                value={props.valor} 
                required={props.obrigatorio}>
                <option value=""></option>
                { props.itens.map((item, index) => <option key={index}>{item}</option>) }
            </select>
        </div>
    );
}