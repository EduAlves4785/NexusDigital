import React, { useEffect, useState } from "react";
import { Container } from "./styles";

export const Rodainfo = ({ numero, texto }) => {
  const [numeroInfo, setNumeroInfo] = useState(0);

  useEffect(() => {
    let interval;

    if (numero > 0) {
      interval = setInterval(() => {
        setNumeroInfo((prevNumero) => {
          if (prevNumero < numero) {
            const diff = numero - prevNumero;
            const increment = diff > 10 ? 1 : 2;
            const intervalSpeed = diff > 10 ? 50 : 500;
            return prevNumero + increment;
          }
          return numero;
        });
      }, 30);
    }

    return () => clearInterval(interval);
  }, [numero]);

  return (
      <Container>
        <div className="counter">{numeroInfo}%</div>
        <div className="texto">{texto}</div>
      </Container>
  );
};
