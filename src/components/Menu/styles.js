import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2em;

  color: var(--text-light);

  ul {
    width: 100%;
    gap: 5%;

    display: flex;
    justify-content: flex-end;
  }

  li:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  div.logo {
    width: 100px;
    height: 50px;
    background-color: white;
  }

  div.collapse-menu {
    width: 25px;
    height: 20px;
    background-color: white;
  }

  a:visited {
    color: var(--text-light);
  }
`;
