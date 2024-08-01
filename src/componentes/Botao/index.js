import './Botao.scss'

export const Botao = (props) => {
    return (
      <button className='botao'>{props.children}</button>  
    )
}