import React from "react";
import { Container } from "./dashboard-styles";
import ContentHeader from "../../Components/ContentHeader";
//import SelectInput from "../../Components/SelectInput";

const Dashboard: React.FC = () => {
  /* const options = [
    { value: "Jan", text: "Janeiro" },
    { value: "Fev", text: "Fevereiro" },
  ]; */

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B"></ContentHeader>
    </Container>
  );
};

export default Dashboard;
