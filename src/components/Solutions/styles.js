import styled from 'styled-components';

export const Container = styled.section``;

export const CardContainer = styled.div`
  margin-top: 3em;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
`;

export const Card = styled.div`
  padding: 3em 1em;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
  gap: 3em;

  transition: .3s ease-in;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  :hover {
    transform: scale(1.05);
  }

  .image {
    width: 60px;
    height: 60px;
    background: black;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
  }

  p {
    font-weight: 300;
  }
`;
