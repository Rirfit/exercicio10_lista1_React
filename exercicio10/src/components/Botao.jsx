import React, {useState} from "react"
function Botao(props){
    const [logado, setLogado] = useState(props.logado)
    const handleClick = () => {
    setLogado(prevLogado => !prevLogado)
    }
    return(
        <button onClick={handleClick}>{logado ? 'Sair':'Entrar'}</button>
    )
}

export default Botao