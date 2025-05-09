import React from "react";
import { Container, Tag } from "./transactionHistory-styles";
import { ITransactionHistoryProps } from "../../interfaces/ITransactionHistoryProps";

const TransactionHistory: React.FC<ITransactionHistoryProps> = (props) => {
  return props.options.map((item, index) => (
    <Container key={index}>
      <Tag color={item.tagColor} />
      <div>
        <span>{item.description}</span>
        <small>{item.dateFormatted}</small>
      </div>
      <h4>{item.amountFormatted}</h4>
    </Container>
  ));
};

export default TransactionHistory;
