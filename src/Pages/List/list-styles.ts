import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;

  height: calc(100vh - 200px);

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

export const Content = styled.main``;

export const Filters = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${({ theme }) => theme.colors.white};

    margin: 0 10px;

    transition: opacity 0.3s;
    opacity: 0.4;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag-filter-recurrent::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 10px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.success};
  }

  .tag-filter-eventual::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 10px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.green};
  }

  .tag-actived {
    opacity: 1;
  }
`;
