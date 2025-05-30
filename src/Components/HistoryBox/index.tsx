import React from "react";
import { Container, Header, LegendContainer, Legend } from "./style-historybox";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import IHistoryBoxProps from "../../interfaces/IHistoryBoxProps";
import formatCurrency from "../../utils/formatCurrency";

const HistoryBox: React.FC<IHistoryBoxProps> = (props: IHistoryBoxProps) => (
  <Container>
    <Header>
      <h2>Histórico de Saldo</h2>
      <LegendContainer>
        <Legend color={props.lineColorAmountEntry}>
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color={props.lineColorAmountOutPut}>
          <div>2%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </Header>
    <ResponsiveContainer>
      <LineChart
        data={props.data}
        margin={{ top: 5, right: 30, left: 30, bottom: 25 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <XAxis dataKey="month" stroke="#cecece" />
        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
        <Line
          type="monotone"
          dataKey="amountEntry"
          name="Entradas"
          stroke={props.lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="amountOutPut"
          name="Saídas"
          stroke={props.lineColorAmountOutPut}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

export default HistoryBox;
