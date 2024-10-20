import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Botao from './components/Botao'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Botao logado={true} />
  </StrictMode>,
)
