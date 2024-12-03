import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
      <img className="logo" src='https://sintraftomg.com.br/0teste/logo.png'/>
      <div className='buttons'>

          <a href='https://sintraftomg.com.br/0teste/previsao.pdf' target="_blank" rel="noopener noreferrer" className="button"> Edital Plano Orçamentário 2025</a>

          <a href='https://bancarios.votabem.com.br/' target="_blank" rel="noopener noreferrer" className="button"> Vote Aqui</a>


      </div>
      
    </div>
  </StrictMode>,
)
