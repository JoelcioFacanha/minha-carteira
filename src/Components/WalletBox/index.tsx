import React from "react";
import CountUp from "react-countup";
import { Container } from "./style-walletBox";
import { IWalletBox } from "../../interfaces/IWalletBox";

import dollarImg from "../../assets/dollar.svg";
import arrowDownImg from "../../assets/arrow-down.svg";
import arrowUpImg from "../../assets/arrow-up.svg";

const WalletBox: React.FC<IWalletBox> = ({
  title,
  amount,
  footerText,
  icon,
  color,
}) => {
  const iconSelected =
    icon === "arrowDown"
      ? arrowDownImg
      : icon === "dollar"
      ? dollarImg
      : arrowUpImg;

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix="R$ "
          separator="."
          decimal=","
          decimals={2}
        ></CountUp>
      </h1>
      <small>{footerText}</small>
      <img src={iconSelected} alt={title} />
    </Container>
  );
};

export default WalletBox;
