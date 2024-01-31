import styled from "styled-components";

export const SobreInicio = styled.section`
  margin-top: 10%;
  width: 100%;
  height: 25rem;

  .text-container {
    padding: 3rem;
    width: 30rem;
    height: 19rem;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    gap: 30px;

    h1 {
      width: 32rem;
      text-align: left;

      span {
        color: #40356f;
      }
    }

    p {
      width: 32rem;
      font-weight: 300;
      font-size: 18px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      background-color: rgb(64, 53, 111);
      margin: 0rem auto;
      width: 18rem;
      height: 2.5rem;
      font-size: 20px;
      font-weight: 500;
      border: none;
      border-radius: 15px;
      color: white;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        background-color: rgb(131, 127, 216);
      }
    }
  }

  @media screen and (max-width: 780px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 25%;
      height: 24rem;
    }

    .text-container {
      width: 85%;
      height: 20rem;
      padding: 1rem;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.2);

      h1 {
        width: 100%;
        font-size: 17px;
      }

      p {
        width: 100%;
        font-weight: 400;
        font-size: 16px;
      }

      a {
        width: 15rem;
      }
    }
  }
`;

export const Servicos = styled.section`
  width: 100%;
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 5%;

  h1 {
    text-align: center;
    font-size: 38px;
  }

  .cards {
    width: 90%;
    height: 35rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      flex-direction: column;
      gap: 2rem;
      background-color: #f2f2f2;
      width: 18rem;
      height: 25rem;
      border-radius: 10px;
      transition: 0.3s;

      h1 {
        width: 100%;
        text-align: center;
        font-size: 32px;
        color: rgb(83, 90, 164);
      }

      p {
        font-size: 18px;
      }

      li {
        font-size: 18px;
      }

      &:hover {
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.75);
      }
    }
  }

  @media screen and (max-width: 780px) {
    & {
      height: 85rem;

      h1 {
        font-size: 30px;
      }
    }

    .cards {
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 100%;

      div {
        width: 85%;
        padding: 1rem;
        height: 24rem;

        h1 {
          font-size: 25px;
        }

        p {
          font-size: 17px;
        }

        li {
          font-size: 16px;
        }

        .icone {
          display: 20px;
        }
      }
    }
  }
`;

export const FocoEmpresa = styled.section`
  width: 100%;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  div:first-child {
    width: 50%;
    height: 25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: last baseline;
    gap: 1rem;
    background-color: #535aa4;
    color: white;
    border-bottom-right-radius: 20%;

    h1 {
      font-size: 50px;
    }

    p {
      font-size: 24px;
      text-align: justify;
    }
  }

  div:last-child {
    width: 50%;
    padding: 3rem;
    height: 28rem;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }
  }

  @media screen and (max-width: 780px) {
    & {
      flex-direction: column;
      height: 60rem;

      div:first-child {
        width: 85%;
        height: 65%;
        padding: 1rem;
        border-radius: 8px;

        h1 {
          font-size: 30px;
          text-align: center;
        }

        p {
          font-size: 17px;
          text-align: center;
        }
      }

      div:last-child {
        padding: 1rem;
        width: 85%;
        height: 100%;
      }
    }
  }
`;

export const Projetos = styled.section`
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  h1:first-child {
    font-size: 30px;
  }

  .projetos-container {
    width: 95%;
    padding: 2rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      background-color: #f2f2f2;
      width: 22rem;
      height: 18rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border-radius: 8px;
      transition: 0.3s;

      h1 {
        font-size: 19px;
      }

      img {
        object-fit: cover;
      }

      &:hover {
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.75);
      }

      h2 {
        width: 98%;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        gap: 0.5rem;
      }

      a {
        text-decoration: none;
        padding: 1rem;
        width: 10rem;
        height: 0.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 500;
        font-size: 20px;
        background-color: #69e9f5;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: rgb(64, 53, 111);
    margin: 0rem auto;
    width: 18rem;
    height: 2.5rem;
    font-size: 20px;
    font-weight: 500;
    border: none;
    border-radius: 15px;
    color: white;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgb(131, 127, 216);
    }
  }

  @media screen and (max-width: 780px) {
    & {
      height: 55rem;

      h1 {
        text-align: center;
      }
    }
    .projetos-container {
      flex-direction: column;
      width: 100%;
      height: 45rem;
      padding: 0;

      div {
        width: 86%;
        height: 14rem;

        .logoIndustria {
          font-size: 30px;
        }

        h2 {
          font-size: 17px;
        }

        a {
          width: 12rem;
        }
      }
    }
  }
`;
