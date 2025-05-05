import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./Components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import light from "./styles/themes/light";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
