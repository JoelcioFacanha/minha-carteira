import styled from "styled-components";
import { ITitleContainerProps } from "../../interfaces/ITitleContainerProps";
import { DefaultTheme } from "styled-components/dist/types";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  overflow: hidden;

  padding: 25px;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: "";
      display: block;
      width: 55px;
      border-bottom: 10px solid
        ${({ title, theme }) => getColorLine(title, theme)};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

function getColorLine(title: string, theme: DefaultTheme) {
  switch (title) {
    case "Entradas":
      return theme.colors.success;
    case "Saídas":
      return theme.colors.warning;
    default:
      return theme.colors.info;
  }
}
