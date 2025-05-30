import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  height: 240px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px;
  padding: 15px 20px;

  border-radius: 7px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 10px;
    padding-left: 27px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;

  padding-right: 35px;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  margin-left: 7px;

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
