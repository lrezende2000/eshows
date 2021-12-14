import styled from 'styled-components';

export const Container = styled.section``;

export const QuestionsContainer = styled.div`
  width: 50%;
  margin-top: 3em;

  display: flex;
  flex-direction: column;

  gap: 2em;
`;

export const Question = styled.div`
  width: 100%;
  padding: 1em 3em;
  border: 1px solid var(--secondary-color);
  border-radius: .5em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* box-shadow: 0 0 5px rgba(0, 0, 0, .5); */

  p {
    span {
      color: var(--text-orange);
    }
  }
`;
