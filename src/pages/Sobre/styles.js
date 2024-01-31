import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 28rem;
  background-image: url("https://a-static.besthdwallpaper.com/colorful-lion-wallpaper-1920x1200-26758_6.jpg");
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

export const Content = styled.section`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  gap: 2rem;

  h1 {
    font-size: 50px;
    color: #837fd8;
    margin-left: -15rem;
  }

  .sobre-box {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    width: 55rem;
    height: 10rem;
    padding: 1.5rem;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;

    span {
      position: relative;
    }

    span:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 10px;
      width: 100%;
      opacity: 0.3;
      background-color: #69e9f5;
    }
  }

  .box-roda {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
  }

  @media screen and (max-width: 780px) {
    & {
      height: 92rem;

      h1 {
        font-size: 40px;
        text-align: center;
        margin: 0;
        text-shadow:
    -5px 0px 0 black,
    0px 0px 0 black,
    0px 2px 0 black,
    0px 2px 0 black;
      }

      .sobre-box {
        width: 80%;
        height: 23rem;
        font-size: 18px;
      }

      .box-roda {
        flex-direction: column;
        height: 55rem;
      }
    }
  }
`;
