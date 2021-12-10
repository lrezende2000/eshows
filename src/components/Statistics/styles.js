import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  background-color: var(--primary-color);
`;

export const Statistic = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  background: white;
`;

export const Values = styled.div`
  margin-left: .5em;

  color: var(--text-light);

  display: flex;
  flex-direction: column;
  align-items: center;

  .value {
    font-size: 2em;
    font-weight: 700;
  }

  .label {
    text-transform: uppercase;
    font-size: .9em;
    font-weight: 300;
  }
`;
