import React from 'react'
import {NavNoImage} from '../../components/Nav2/index'
import {Content,BackgroundImage} from './styles'
import { Rodainfo } from "../../components/RodaInfos";
import {Footer} from '../../components/Footer/index'


export const Sobre = () => {
  return (
    <>
        <NavNoImage/>
        <Content>
          <BackgroundImage/>
          <h1>Nós somos NEXUS</h1>
          <div className="sobre-box">
            <p>A Nexus Digital surgiu com o propósito de <span>revolucionar</span> o cenário de sites, especialmente os institucionais. Nosso foco é proporcionar aos clientes sites de alta qualidade a <span>preços acessíveis</span>, mantendo o mesmo nível de excelência da concorrência, mas com uma proposta mais acessível. Estamos comprometidos em oferecer <span>soluções inovadoras e acessíveis</span> para impulsionar o sucesso dos nossos clientes.</p>
          </div>
          <div className="box-roda">
            <Rodainfo numero={100} texto={'Clientes satisfeitos'}/>
            <Rodainfo numero={100} texto={'Projetos entregues no prazo'}/>
            <Rodainfo numero={100} texto={'Projetos online'}/>
          </div>
        </Content>
        <Footer/>
    </>
  )
}
