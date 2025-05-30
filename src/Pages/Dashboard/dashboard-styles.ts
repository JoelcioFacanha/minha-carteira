import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;

  padding: 25px;

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

export const Content = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
