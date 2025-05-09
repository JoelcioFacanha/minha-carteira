import React from "react";
import { Container } from "./selectInput-styles";
import { ISelectInputOptions } from "../../interfaces/ISelectInputOptions";

const SelectInput: React.FC<ISelectInputOptions> = (props) => {
  return (
    <Container>
      <select onChange={props.onChange} defaultValue={props.defaultValue}>
        {props.options.map((op, index) => {
          return (
            <option key={index} value={op.value}>
              {op.text}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default SelectInput;
