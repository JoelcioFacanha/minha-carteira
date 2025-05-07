import React from "react";
import { Container, TitleContainer, Controllers } from "./contentHeader-styles";
import { IContentHeaderProps } from "../../interfaces/IContentHeaderProps";

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer title={title}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
