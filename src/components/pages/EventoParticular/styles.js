import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 40%;

  display: flex;
  flex-direction: column;

  gap: 1em;
`;

export const ButtonGroup = styled.div`
  display: flex;

  gap: 1em;
`;

export const Button = styled.button`
  ${props => {
    if (props.fullWidth) {
      return css`
        width: 100%;
      `
    }
  }}

  padding: 1.5em 3em;
  border: 1px solid ${(props => props.border)};
  border-radius: .5em;

  font-weight: 700;
  color: ${(props => props.color)};

  background-color: ${(props => props.background)} !important;
`;

export const StepsContainer = styled.div`
  margin-top: 3em;
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 1em;
`;

export const Step = styled.div`
  padding: 3em;
  border-radius: .5em;

  color: var(--text-dark);

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  background-color: white;

  gap: 1em;

  .square {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: .8em;
    background-color: var(--primary-color);
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Comment = styled.div`
  padding: 1em;

  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 2em;

    font-style: italic;
    font-weight: 300;
  }

  span {
    font-size: .9em;
  }

  span.name {
    font-weight: 700;
  }

  span.text-pink {
    color: #FF335F;
  }
`;
