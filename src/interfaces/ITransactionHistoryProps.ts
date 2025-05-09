import { IData } from "./IData";

export interface ITransaction {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

export interface ITransactionHistoryProps {
  options: IData[];
}
