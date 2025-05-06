import React from "react";

import { Container, ToggleLable, ToggleSelector } from "./toggle-styled";

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLable>Light</ToggleLable>
      <ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => undefined}
      />
      <ToggleLable>Dark</ToggleLable>
    </Container>
  );
};

export default Toggle;
