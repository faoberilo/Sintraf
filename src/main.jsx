import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
      <img className="logo" src='https://sintraftomg.com.br/admin/img/midia/thumb.noticias-sintraf.29-11-2024.16-14-34.0.png'/>
      <div className='buttons'>

          <a href='https://sintraftomg.com.br/conteudo-noticias/pasta_uploads/SINTRAFTOMG-%20Previsao%20Orcamentaria.pdf' target="_blank" rel="noopener noreferrer" className="button"> Edital Plano Orçamentário 2025</a>

          <a href='' target="_blank" rel="noopener noreferrer" className="button"> Vote Aqui</a>


      </div>
      
    </div>
  </StrictMode>,
)
