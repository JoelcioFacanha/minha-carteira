import React, { useMemo, useState } from "react";
import { Container } from "./dashboard-styles";
import ContentHeader from "../../Components/ContentHeader";
import SelectInput from "../../Components/SelectInput";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import { Filters } from "../List/list-styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

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

    [...expenses, ...gains].forEach((item) => {
      const currentDate = new Date(item.date);
      const year = currentDate.getFullYear();

      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });

    return uniqueYears.map((item) => {
      return { value: item, text: item };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error("Mês invalido!");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error("Ano inválido!");
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <Filters />
        <SelectInput
          options={months}
          onChange={(event) => handleMonthSelected(event.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(event) => handleYearSelected(event.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
