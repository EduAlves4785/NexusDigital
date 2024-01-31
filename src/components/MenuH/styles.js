import styled from "styled-components";

export const Menu = styled.div`
  & {
    z-index: 1000;
    display: none;
  }

  #menu-toggle {
    display: none;
  }

  #menu-icon {
    display: none;
  }

  @media screen and (max-width: 780px) {
    & {
      display: block;
      z-index: 1;
    }

    #menu-icon {
      display: block;
      font-size: 55px;
      cursor: pointer;
      padding: 15px;
      background-color: none;
      color:#60D6E0;
    }

    #menu {
      display: none;
      position: absolute;
      top: 72px;
      left: 0;
      width: 100%;
      background-color:rgb(64,53,111,0.6);
      backdrop-filter: blur(10px);

    }

    #menu.open {
      display: block;
    }

    #menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    #menu li {
      padding: 15px;
      text-align: center;
      border-bottom: 1px solid #555;
    }

    #menu a {
      text-decoration: none;
      color: white;
      font-size: 18px;
      display: block;
    }
  }
`;
