import React from "react";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";
import { Grid } from "./layout-styles";

const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content />
    </Grid>
  );
};

export default Layout;
