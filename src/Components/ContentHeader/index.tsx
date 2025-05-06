import React from "react";
import { Container, TitleContainer, Controllers } from "./contentHeader-styles";

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Botão 01</button>
        <button type="button">Botão 02</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
