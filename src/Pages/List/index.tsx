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

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const [frequencyFilterSelected, setfrequencyFilterSelected] =
    useState<string>("all");

  const { type } = useParams();

  const pageData = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", listData: gains, lineColor: "#F7931B" }
      : { title: "Saídas", listData: expenses, lineColor: "#E44C4E" };
  }, [type]);

  const handleFrequencyClick = (frequency: string) => {
    if (frequencyFilterSelected === frequency) {
      setfrequencyFilterSelected("all");
    } else {
      setfrequencyFilterSelected(frequency);
    }
  };

  useEffect(() => {
    const { listData } = pageData;
    const filterData = listData.filter((item) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.getMonth() + 1;
      const itemYear = itemDate.getFullYear();

      if (frequencyFilterSelected == "all")
        return itemMonth === monthSelected && itemYear === yearSelected;

      return (
        itemMonth === monthSelected &&
        itemYear === yearSelected &&
        item.frequency === frequencyFilterSelected
      );
    });

    const data = filterData.map((item) => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        type: item.type,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#0074CC" : "#8BC34A",
      };
    });

    setData(data);
  }, [frequencyFilterSelected, monthSelected, pageData, yearSelected]);

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
    const { listData } = pageData;

    listData.forEach((item) => {
      const currentDate = new Date(item.date);
      const year = currentDate.getFullYear();

      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });

    return uniqueYears.map((item) => {
      return { value: item, text: item };
    });
  }, [pageData]);

  return (
    <>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <Filters>
          <button
            type="button"
            className={`
              tag-filter 
              tag-filter-recurrent 
              ${
                frequencyFilterSelected === "recorrente"
                  ? "tag-actived"
                  : frequencyFilterSelected === "all" && "tag-actived"
              }`}
            onClick={() => handleFrequencyClick("recorrente")}
          >
            Recorentes
          </button>
          <button
            type="button"
            className={`
              tag-filter 
              tag-filter-eventual 
              ${
                frequencyFilterSelected === "eventual"
                  ? "tag-actived"
                  : frequencyFilterSelected === "all" && "tag-actived"
              }`}
            onClick={() => handleFrequencyClick("eventual")}
          >
            Eventuais
          </button>
        </Filters>
        <SelectInput
          options={months}
          onChange={(event) => setMonthSelected(Number(event.target.value))}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(event) => setYearSelected(Number(event.target.value))}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Container>
        <Content>
          <TransactionHistory options={data} />
        </Content>
      </Container>
    </>
  );
};

export default List;
