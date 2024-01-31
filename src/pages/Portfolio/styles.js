import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  gap: 2rem;

  h1 {
    font-size: 50px;
  }

  .sobre-box {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    width: 55rem;
    height: 5rem;
    padding: 1.5rem;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  .projetos {
    width: 95%;
    padding: 1rem;
    height: 27rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h1 {
      text-shadow: 2px 2px black;
    }

    div {
      position: relative;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: white;
      filter: grayscale(0.6);
      border-radius: 8px;
      transition: 0.3s linear;

      a {
        background-color: #837fd8;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 1rem;
        padding: 1rem;
        font-size: 25px;
        text-decoration: none;
        color: white;
        border-radius: 15px;
      }
    }

    div:hover {
      filter: grayscale(0);
      background-size: 110%;
    }
  }

  @media screen and (max-width: 780px) {
    &{
        margin-top: 30%;
        height: auto;

        h1{
            text-align: center;
            font-size: 30px;
        }

        .sobre-box{
            width: 80%;
            font-size: 18px;
            height: 12rem;
        }
    }
  }
`;
