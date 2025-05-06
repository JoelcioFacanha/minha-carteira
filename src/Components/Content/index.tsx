import React from "react";
import { Container } from "./content-styles";
import props from "../../interfaces/props";

const Content: React.FC<props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
