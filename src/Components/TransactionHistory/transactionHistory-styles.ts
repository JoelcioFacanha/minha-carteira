import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${({ theme }) => theme.colors.tertiary};
  list-style: none;

  border-radius: 5px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(3px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 10px;
    color: ${({ theme }) => theme.colors.white};
  }

  > div span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Tag = styled.div<ITagProps>`
  width: 10px;
  height: 60%;

  position: absolute;

  background-color: ${({ color }) => color};

  left: 0;
`;
