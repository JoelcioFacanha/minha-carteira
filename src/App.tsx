import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./Components/Layout";
import dark from "./styles/themes/dark";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/app.route";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <RouterProvider router={AppRoutes} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
