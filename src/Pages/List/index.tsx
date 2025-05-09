import React, { useState, useEffect, useMemo } from "react";
import { Container, Filters } from "./list-styles";
import ContentHeader from "../../Components/ContentHeader";
import SelectInput from "../../Components/SelectInput";
import Content from "../../Components/Content";
import TransactionHistory from "../../Components/TransactionHistory";
import { useParams } from "react-router-dom";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import { IData } from "../../interfaces/IData";
//import lastTenYears from "../../utils/lastTenYears";

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(
    (new Date().getMonth() + 1).toString()
  );

  const [yearSelected, setYearSelected] = useState<string>(
    new Date().getFullYear().toString()
  );

  const { type } = useParams();

  const title = type === "entry-balance" ? "Entradas" : "Saídas";
  const listData = type === "entry-balance" ? gains : expenses;
  const lineColor = type === "entry-balance" ? "#F7931B" : "#E44C4E";

  useEffect(() => {
    const filterData = listData.filter((item) => {
      const itemDate = new Date(item.date);
      const itemMonth = (itemDate.getMonth() + 1).toString();
      const itemYear = itemDate.getFullYear().toString();

      return itemMonth === monthSelected && itemYear === yearSelected;
    });

    const data = filterData.map((item) => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        type: item.type,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#F7931B" : "#E44C4E",
      };
    });

    setData(data);
  }, [listData, monthSelected, yearSelected]);

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

  const years = useMemo(() => {
    const uniqueYears: number[] = [];

    listData.forEach((item) => {
      const currentDate = new Date(item.date);
      const year = currentDate.getFullYear();

      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });

    return uniqueYears.map((item) => {
      return { value: item, text: item };
    });
  }, [listData]);

  //const years = lastTenYears();
  /* const years = [
    { value: 2025, text: 2025 },
    { value: 2024, text: 2024 },
    { value: 2023, text: 2023 },
    { value: 2022, text: 2022 },
    { value: 2021, text: 2021 },
    { value: 2020, text: 2020 },
    { value: 2019, text: 2019 },
    { value: 2018, text: 2018 },
  ]; */

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
        <SelectInput
          options={months}
          onChange={(event) => setMonthSelected(event.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(event) => setYearSelected(event.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Container>
        <Content>
          {/* {data.map((item, index) => (
            <TransactionHistory
              key={index}
              tagColor={item.tagColor}
              title={item.description}
              subTitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))} */}
          <TransactionHistory options={data} />
        </Content>
      </Container>
    </>
  );
};

export default List;
