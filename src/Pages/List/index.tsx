import React from "react";
import { Container, Filters } from "./list-styles";
import ContentHeader from "../../Components/ContentHeader";
import SelectInput from "../../Components/SelectInput";
import Content from "../../Components/Content";
import TransactionHistory from "../../Components/TransactionHistory";
import { useParams } from "react-router-dom";

const List: React.FC = () => {
  const { type } = useParams();

  const title = type === "entry-balance" ? "Entradas" : "Saídas";
  const lineColor = type === "entry-balance" ? "#F7931B" : "#E44C4E";

  const months = [
    { value: "1", text: "Janeiro" },
    { value: "2", text: "Fevereiro" },
    { value: "3", text: "Março" },
    { value: "4", text: "Abril" },
    { value: "5", text: "Maio" },
    { value: "6", text: "Junho" },
    { value: "7", text: "Julho" },
    { value: "8", text: "Agosto" },
    { value: "9", text: "Setembro" },
    { value: "10", text: "Outubro" },
    { value: "11", text: "Novembro" },
    { value: "12", text: "Dezembro" },
  ];

  const years = [
    { value: 2025, text: 2025 },
    { value: 2024, text: 2024 },
    { value: 2023, text: 2023 },
    { value: 2022, text: 2022 },
    { value: 2021, text: 2021 },
    { value: 2020, text: 2020 },
    { value: 2019, text: 2019 },
    { value: 2018, text: 2018 },
  ];

  return (
    <>
      <ContentHeader title={title} lineColor={lineColor}>
        <Filters>
          <button type="button" className="tag-filter tag-filter-recurrent">
            Recorentes
          </button>
          <button type="button" className="tag-filter tag-filter-eventual">
            Eventuais
          </button>
        </Filters>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Container>
        <Content>
          <TransactionHistory
            tagColor="#E44C4E"
            title="Conta de Luz"
            subTitle="07/05/2025"
            amount="R$ 133,50"
          />
        </Content>
      </Container>
    </>
  );
};

export default List;
