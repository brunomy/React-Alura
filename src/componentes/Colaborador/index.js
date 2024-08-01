import './Colaborador.scss'
// https://github.com/brunomy.png
const Colaborador = ({nome, imagem, cargo, cor}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{background: cor}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;