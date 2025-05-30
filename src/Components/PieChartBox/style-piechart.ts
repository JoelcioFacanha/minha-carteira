import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 10px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;
  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 15px;

  > h2 {
    margin-bottom: 15px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const LegendContainer = styled.ul`
  list-style: none;

  padding: 5px;

  height: 190px;
  width: 150px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  font-size: 16px;

  > div {
    background-color: ${(props) => props.color};

    width: 40px;
    height: 40px;

    border-radius: 5px;

    font-size: 12px;
    line-height: 40px;

    text-align: center;
  }

  > span {
    margin-left: 5px;
  }
`;
