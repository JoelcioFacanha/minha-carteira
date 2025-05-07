import React from "react";
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from "./aside-styles";
import logo from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logo} alt="logo minha carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard /> Dashboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward /> Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward /> Saidas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp /> Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
