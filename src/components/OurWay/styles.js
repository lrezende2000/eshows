import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 500px;
`;

export const WaysContainer = styled.div`
  margin-top: 3em;

  display: flex;
  justify-content: space-between;
`;

export const Way = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1em;
    margin-bottom: 2em;
    border-radius: 50%;

    background-color: var(${(props) => props.inverse ? '--secondary-color' : '--primary-color'});
  }

  span {
    font-weight: 700;
  }
`;
