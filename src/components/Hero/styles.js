import styled from 'styled-components';

export const Container = styled.section`
  background: url('/assets/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: ${props => props.height ? props.height : '85vh'};
`;

export const SearchContainer = styled.div`
  height: 100%;

  color: var(--text-light);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    max-width: 50%;
  }

  > p {
    max-width: 35%;
    margin: 1em 0;

    font-weight: 300;
    font-size: 1em;
    
    span {
      text-decoration: underline;
      font-weight: 500;
    }
  }

  > button {
    padding: .7em 2em;
    border: 2px solid white;
    border-radius: .5em;

    color: inherit;

    text-transform: uppercase;
    font-weight: 400;

    background-color: var(--secondary-color);
  }
  

`;
