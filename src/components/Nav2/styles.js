import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 28rem;
  background-size: cover;
  background-position: center;
  z-index: -1;
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);

  @media screen and (max-width: 780px) {
    & {
      clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
      width: 50%;
    }
  }
`;

export const NavbarContainer = styled.nav`
  & {
    color: #001f3f;
    background-color: ${({ transparent }) =>
      transparent ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)"};
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
  }

  .logo-box {
    width: 15rem;
    height: 5rem;
    padding-left: 5rem;
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      width: 15rem;
      height: 85%;
    }

    img {
      width: 350px;
      height: 290px;
      margin-top: 1rem;
    }

    h1 {
      margin-left: 1rem;
    }
  }

  .itens {
    box-sizing: border-box;
    width: 25rem;
    margin-right: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1%.5;
    padding: 0.5rem;
    gap: 10px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);

    a {
      box-sizing: border-box;
      cursor: pointer;
      color: #69e9f5;
      width: 6rem;
      height: 2rem;
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      transition: 0.1s ease-in;
    }

    a:hover {
      color: black;
      border-bottom: 2px solid #837fd8;
    }
  }

  @media screen and (max-width: 780px) {
    & {
      align-items: none;
      justify-content: space-between;
    }

    .logo-box {
      padding: 0;
      width: 11.2rem;
      font-size: 10px;

      a {
        width: 100%;
      }

      h1 {
        margin: 0.2rem;
      }

      img{
        object-fit: cover;
        width: 250px;
        height: 150px;
        margin: 0;
      }
    }

    .itens {
      display: none;
    }
  }
`;
