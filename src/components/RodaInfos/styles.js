import styled from "styled-components";

export const Container = styled.div`
  @keyframes example {
    from {
      border: 5px solid #40356f;
    }
    to {
      border: 5px solid #837fd8;
    }
  }

  & {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    animation: example 2s linear;
    border: 5px solid #837fd8;

    .texto{
        width: 8rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: 700;
        font-size: 30px;
    }

    .counter{
        font-size: 40px;
        font-weight: 700;
    }

  }
`;
