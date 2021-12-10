import styled from 'styled-components';

export const Container = styled.div`
  width: max-content;
  padding: 1em 2em;
  padding-right: 1em;
  margin: 2.5em 0; // remover isso
  border-radius: 1em;

  background: rgba(255, 255, 255, .5);
  
  display: flex;

`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: .9em;
  color: var(--text-light);

  margin-right: ${(props => props.spacing ? `${props.spacing * 3}em` : '3em')};
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: .9em;

  margin-bottom: 1em;
`;

export const Input = styled.input`
  width: 100%;

  font-weight: 700;
  font-size: .9em;
  color: var(--text-light);

  background: transparent;
`;

export const Divider = styled.span`
  width: 1px;
  height: 100%;
  
  margin: 0 1em;

  background-color: white;
`;

export const IconContainer = styled.div`
  height: 100%;
  padding: 1em 1.3em;
  border-radius: 1em;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--secondary-color);
`;
