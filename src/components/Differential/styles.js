import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: ${(props => props.inverse ? '4fr 2fr' : '2fr 4fr')};

  gap: 3em;
`;

export const ImageContainer = styled.div`
  height: 50vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 1.5em;

  h2 {
    font-size: 3em;
  }

  h3 {
    font-size: 1.5em;
    font-weight: 400;

    span {
      color: var(--text-orange);
    }
  }

  p {
    font-weight: 300;
  }

  button {
    padding: 1em 3em;
    border-radius: .5em;

    color: var(--text-light);

    background: var(--secondary-color);
  }

  .funcionalities {
    display: flex;
    flex-direction: column;

    gap: 2em;
  }

  .funcionality {
    display: flex;
    align-items: center;

    gap: 1em;
  }
`;
