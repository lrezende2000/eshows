import styled from 'styled-components';

export const Container = styled.section``;

export const CardContainer = styled.div`
  margin-top: 3em;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;

export const Card = styled.div`
  width: 100%;
  min-height: 400px;

  border-radius: 1em;

  background: url('/assets/guy-playing.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  :hover {
    .hover {
      opacity: 1;
    }
  }

  .hover {
    width: 100%;
    height: 100%;

    opacity: 0;
    padding: 3em 0;
    border-radius: 1em;

    transition: .3s ease-in;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    background: rgba(0, 0, 0, .5);

    span {
      font-size: 1.5em;
      font-weight: 7900;
      color: var(--text-light);
    }
  }
`;
