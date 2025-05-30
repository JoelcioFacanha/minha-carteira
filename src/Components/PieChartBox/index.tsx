import React from "react";
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from "./style-piechart";
import IPieChartProps from "../../interfaces/IPieChartProps";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((indicador) => (
          <Legend key={indicador.name} color={indicador.color}>
            <div>{indicador.percent}%</div>
            <span>{indicador.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map((indicador) => (
              <Cell key={`cell-${indicador.name}`} fill={indicador.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;
