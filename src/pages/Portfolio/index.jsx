import React from "react";
import { NavNoImage } from "../../components/Nav2";
import { Content } from "./styles";
import { Footer } from "../../components/Footer";

import projetooficina from "../../assets/img/projetooficina.png";
import projetoodonto from "../../assets/img/projetoodonto.png";
import projetoindustria from "../../assets/img/projetoindustria.png";

export const Portfolio = () => {
  
    const estiloFundo = (imagem) => ({
        backgroundImage: `url(${imagem})`,
    });

  return (
    <>
      <NavNoImage />
      <Content>
        <h1>Pensando em cada detalhe</h1>
        <div className="sobre-box">
          <p>
            Em cada projeto, priorizamos a excelência, cuidando minuciosamente
            de cada detalhe. Acreditamos que a atenção aos pormenores faz toda a
            diferença, resultando em soluções que se destacam pela qualidade e
            inovação.
          </p>
        </div>
        <div className="projetos">
          <div style={estiloFundo(projetooficina)}>
            <h1>AUTOLUXO MERCEDES</h1>
            <a href="https://edualves4785.github.io/AUTOLUXO-MERCEDES/">Acessar</a>
          </div>
          <div style={estiloFundo(projetoodonto)}>
            <h1>OdontoCare +</h1>
            <a href="https://edualves4785.github.io/OdontoCare-Plus/">Acessar</a>
          </div>
          <div style={estiloFundo(projetoindustria)}>
            <h1>FortPack</h1>
            <a href="https://edualves4785.github.io/FortPack/">Acessar</a>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};
