import styled from 'styled-components';

export const Container = styled.section`
  background: url('/assets/background.png');
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
  background-size: cover;
  /* background-clip: border-box; */

  height: 85vh;
`;

export const SearchContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    max-width: 50%;

    color: var(--text-light);
  }

  p {
    font-weight: 300;
    font-size: 1em;
    color: var(--text-light);

    span {
      text-decoration: underline;
      font-weight: 500;
    }
  }
`;
