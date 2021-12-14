import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3em 0 10em;

  background: linear-gradient(var(--secondary-color) 80%, white 80% 100%);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 1em;
  padding: 3em 2em;

  height: 400px;
  width: 800px;

  background: white;

  > p {
    font-size: 1.8em;
    text-align: center;
  }

  .author {
    display: flex;
    align-items: center;

    gap: 1em;
  }

  .author-image {
    border-radius: 50%;

    width: 80px;
    height: 80px;

    background: rgba(0, 0, 0, .5);
  }

  .author-name {
    font-size: 1.2em;
  }
`;

export const Pagination = styled.div`
  margin-top: 2em;

  display: flex;
  align-items: center;

  gap: 1em;
`;

export const PageIcon = styled.div`
  width: 3em;
  height: .5em;

  background: ${(props => props.active ? 'rgba(255, 255, 255, 1)': 'rgba(255, 255, 255, .5)')};
`;

export const FormContainer = styled.div`
  margin-top: 5em;

  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2em 4em;
  border-radius: 1em;
  box-shadow: 0px 5px 100px rgba(0, 0, 0, .5);
  gap: 2em;

  background: white;

  h3 {
    font-size: 1.5em;
  }

  button {
    padding: 1em 3em;
    border-radius: .5em;

    color: var(--text-light);
    text-transform: uppercase;

    background: var(--secondary-color);
  }
`;

export const Input = styled.input`
  width: 100%;

  padding: .5em 1em;
  border-bottom: 1px solid rgba(0, 0, 0, .5);
`;
