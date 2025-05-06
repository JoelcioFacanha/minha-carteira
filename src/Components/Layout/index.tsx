import React from "react";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";
import { Grid } from "./layout-styles";
import props from "../../interfaces/props";

const Layout: React.FC<props> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
