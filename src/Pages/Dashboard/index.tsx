import React, { useMemo, useState } from "react";
import { Container, Content } from "./dashboard-styles";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import { Filters } from "../List/list-styles";

import ContentHeader from "../../Components/ContentHeader";
import SelectInput from "../../Components/SelectInput";
import WalletBox from "../../Components/WalletBox";
import MessageBox from "../../Components/MessageBox";
import PieChartBox from "../../Components/PieChartBox";
import HistoryBox from "../../Components/HistoryBox";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import grinningImg from "../../assets/grinning.svg";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const months = useMemo(() => {
    return [
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
  }, []);

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const data = new Date(item.date);
      const year = data.getFullYear();
      const month = data.getMonth() + 1;

      if (year === yearSelected && month === monthSelected)
        total += Number(item.amount);
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const data = new Date(item.date);
      const year = data.getFullYear();
      const month = data.getMonth() + 1;

      if (year === yearSelected && month === monthSelected)
        total += Number(item.amount);
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const relationExpensesVersusGains = useMemo(() => {
    const totalGeral = totalExpenses + totalGains;

    const percentGains = Number(((totalGains / totalGeral) * 100).toFixed(1));
    const percentExpenses = Number(
      ((totalExpenses / totalGeral) * 100).toFixed(1)
    );

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: percentGains,
        color: "#F7931B",
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: percentExpenses,
        color: "#E44C4E",
      },
    ];

    return data;
  }, [totalExpenses, totalGains]);

  const message = useMemo(() => {
    if (totalBalance < 0)
      return {
        title: "Que triste!",
        description: "Você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente economizar.",
        icon: sadImg,
      };
    else if (totalBalance === 0)
      return {
        title: "Ufa!",
        description: "Você gastou exatamente o que você ganhou",
        footerText: "Cuidado!.",
        icon: grinningImg,
      };

    return {
      title: "Muito Bem!",
      description: "Sua carteira está positiva!",
      footerText: "Continue assim. Considere investir seu saldo.",
      icon: happyImg,
    };
  }, [totalBalance]);

  const historyData = useMemo(() => {
    return months.map((_, month) => {
      let amountEntry = 0;
      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected)
          amountEntry += Number(gain.amount);
      });

      let amountOutPut = 0;
      expenses.forEach((expense) => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected)
          amountOutPut += Number(expense.amount);
      });

      return {
        monthNumber: month,
        month: months[month].text.substring(0, 3),
        amountEntry,
        amountOutPut,
      };
    });
  }, [months, yearSelected]);

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
      <Content>
        <WalletBox
          title="Saldo"
          amount={totalBalance}
          footerText="atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4E41F0"
        />
        <WalletBox
          title="Entradas"
          amount={totalGains}
          icon="arrowUp"
          footerText="atualizado com base nas entradas e saídas"
          color="#F7931B"
        />
        <WalletBox
          title="Saída"
          amount={totalExpenses}
          footerText="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChartBox data={relationExpensesVersusGains} />
        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#F7931B"
          lineColorAmountOutPut="#E44C4E"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
