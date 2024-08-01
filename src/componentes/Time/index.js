import Colaborador from '../Colaborador';
import './Time.scss'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 ?
        <section className='time' style={{background: props.cores[1]}}>
            <h3 style={{borderBottom: '4px solid '+props.cores[0]}}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map(item => 
                <Colaborador 
                    key={item.nome}
                    cor={props.cores[0]}
                    nome={item.nome} 
                    cargo={item.cargo} 
                    imagem={item.imagem}
                />)}
            </div>
        </section> : ''
    )
}

export default Time;