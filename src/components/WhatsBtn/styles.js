import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

export const WhatsAppLink = styled.a`
  display: block;
  width: 60px;
  height: 60px;
  background-color: #25d366; /* Cor verde do WhatsApp */
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;

  img {
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }

  &:hover {
    background-color: #128c7e; /* Cor de destaque no hover */
  }
`;
