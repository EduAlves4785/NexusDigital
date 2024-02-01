import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { SobreInicio, Servicos, FocoEmpresa, Projetos } from "./styles";
import { Footer } from "../../components/Footer/index";

import { GrPersonalComputer } from "react-icons/gr";
import { IoMdSpeedometer } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import { MdFactory } from "react-icons/md";
import { WhatsBtn } from "../../components/WhatsBtn/index";

import template from "../../assets/img/template.png";
import odonto from "../../assets/img/logoOdonto.png";
import autoluxo from "../../assets/img/logoAUTOLUXO.png";

export const Home = () => {
  return (
    <>
      <Navbar />
      <SobreInicio>
        <div className="text-container">
          <h1>
            Desenvolvemos soluções poderosas, resultados{" "}
            <span>excepcionais.</span>
          </h1>
          <p>
            A Nexus Digital impulsiona o crescimento de pequenas e médias
            empresas, conectando-as ao Brasil e ao mundo por meio de sites
            institucionais estratégicos.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5511970124725"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato
          </a>
        </div>
      </SobreInicio>
      <Servicos>
        <h1>Criação de sites institucionais</h1>
        <div className="cards">
          <div>
            <GrPersonalComputer className="icone" />
            <h1>Criação de sites</h1>
            <p>
              Conte com a Nexus Digital para ter seu site desenvolvido por
              especialistas no assunto.
            </p>
            <ul>
              <li>Site responsivo</li>
              <li>1º Mês de manutenção gratuito</li>
              <li>Hospedagem e domínio incluso</li>
              <li>Orçamento que cabe no seu bolso</li>
            </ul>
          </div>
          <div>
            <IoMdSpeedometer className="icone" />
            <h1>Desempenho</h1>
            <p>
              Focamos no alto desempenho de cada site desenvolvido,
              proporcionando uma experiência superior aos usuários.
            </p>
            <ul>
              <li>Hospedagem de qualidade</li>
              <li>Tecnologias atuais do mercado</li>
              <li>Conteúdo personalizado</li>
              <li>Design único e otimizado</li>
            </ul>
          </div>
          <div>
            <TbWorldWww className="icone" />
            <h1>Domínio</h1>
            <p>
              Registramos seu domínio para garantir presença online única e
              eficiente.
            </p>
            <ul>
              <li>Domínio personalizado</li>
              <li>Com nome da sua empresa</li>
              <li>Sem custos adicionais</li>
              <li>Valor de manutenção fixo</li>
            </ul>
          </div>
        </div>
      </Servicos>
      <FocoEmpresa>
        <div className="itens">
          <div>
            <h1>Transforme sua Empresa</h1>
            <ul>
              <li><strong>Expansão de Clientes: </strong>Alcance novos públicos e expanda sua base de clientes.</li>
              <li><strong>Fortalecimento de Marca:</strong> Construa uma reputação sólida e ganhe a confiança do mercado.</li>
              <li><strong>Conversões Aumentadas:</strong> Facilite a conversão de leads em clientes com uma presença online.</li>
            </ul>
          </div>
          <div className="img-box">
            <img src={template} alt="Template de sites" />
          </div>
        </div>
      </FocoEmpresa>
      <Projetos>
        <h1>Conheça nossos principais projetos</h1>
        <div className="projetos-container">
          <div>
            <h2>
              <img src={autoluxo} width={150} alt="Logo da autoluxo mercedes" />
              AUTOLUXO MERCEDES
            </h2>
            <h1>AUTOLUXO MERCEDES</h1>
            <a href="https://edualves4785.github.io/AUTOLUXO-MERCEDES/">
              Ver projeto
            </a>
          </div>
          <div>
            <h2>
              <img src={odonto} width={250} alt="Logo da odontocare +" />
            </h2>
            <h1>OdontoCare +</h1>
            <a href="https://edualves4785.github.io/OdontoCare-Plus/">
              Ver projeto
            </a>
          </div>
          <div>
            <h2 className="logoIndustria" style={{ color: "#001F57" }}>
              <MdFactory fontSize={50} color="#e36414" />
              FortPack
            </h2>
            <h1>FortPack</h1>
            <a href="https://edualves4785.github.io/FortPack/">Ver projeto</a>
          </div>
        </div>
        <Link to="/NexusDigital/portfolio">Mais detalhes</Link>
      </Projetos>
      <Footer />
      <WhatsBtn />
    </>
  );
};
