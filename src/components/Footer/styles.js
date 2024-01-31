import styled from "styled-components";

export const Rodape = styled.div`
  color: white;
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;
  bottom: 0;
  margin-top: 2rem;
  font-size: 18px;
  text-align: center;
  background-color: #535AA4;

  div{
    padding: 1rem;
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 1rem;
  }

  @media only screen and (max-width: 700px){
        font-size: 12px;

    }
`;
