import React, { useMemo } from "react";
import { Container, Profile, UserName } from "./mainHeader-styles";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profile>
        <h3>Olá, {emoji}</h3>
        <UserName>Joélcio Façanha Moreira</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
