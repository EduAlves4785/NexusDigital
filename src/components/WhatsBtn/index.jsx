import React from 'react'
import {ButtonContainer,WhatsAppLink} from './styles'
import icon from '../../assets/img/whatsapp-icon.png'

export const WhatsBtn = () => {
  return (
    <ButtonContainer>
    <WhatsAppLink href="https://api.whatsapp.com/send?phone=11970124725" target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="WhatsApp" />
    </WhatsAppLink>
  </ButtonContainer>
  )
}
