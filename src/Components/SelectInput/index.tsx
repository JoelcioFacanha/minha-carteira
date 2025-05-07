import React from "react";
import { Container } from "./selectInput-styles";
import { ISelectInputOptions } from "../../interfaces/ISelectInputOptions";
//import props from "../../interfaces/props";

const SelectInput: React.FC<ISelectInputOptions> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((op) => {
          return <option value={op.value}>{op.text}</option>;
        })}
      </select>
    </Container>
  );
};

export default SelectInput;
