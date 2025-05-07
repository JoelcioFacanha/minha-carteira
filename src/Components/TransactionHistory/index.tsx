import React from "react";
import { Container, Tag } from "./transactionHistory-styles";
import { ITransactionHistoryProps } from "../../interfaces/ITransactionHistoryProps";

const TransactionHistory: React.FC<ITransactionHistoryProps> = ({
  tagColor,
  title,
  subTitle,
  amount,
}) => {
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
};

export default TransactionHistory;
