import React, { useState, useEffect } from "react";
import { NavbarContainer, BackgroundImage } from "../Navbar/styles";
import logo from "../../assets/img/logo.png";
import { MenuHamburger } from "../MenuH";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [transparent, setTransparent] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BackgroundImage />
      <NavbarContainer transparent={transparent}>
        <div className="logo-box">
          <Link to="/NexusDigital">
            <img src={logo} alt="Logo da Nexus" />
          </Link>
        </div>
        <div className="itens">
          <Link to="/NexusDigital">Home</Link>
          <Link to="/NexusDigital/sobre">Sobre nós</Link>
          <Link to="/NexusDigital/portfolio">Portifólio</Link>
          <a
            href="https://api.whatsapp.com/send?phone=5511970124725"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </div>
        <MenuHamburger />
      </NavbarContainer>
    </>
  );
};
