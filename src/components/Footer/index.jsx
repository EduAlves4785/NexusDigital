import React from 'react'
import {Rodape} from './styles'

export const Footer = ({fixed}) => {
  return (
    <Rodape style={{position:fixed==true?"fixed":'relative'}}>
        <div>
          <h3>Whatsapp</h3>
          <p>(11)9 7012-4725</p>
        </div>
         <p>© 2024. NexusDigital. Todos os direitos reservados</p>
    </Rodape>
  )
}
