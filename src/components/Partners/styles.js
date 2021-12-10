import styled from 'styled-components';

export const Container = styled.section`
  .rec-carousel {
    margin-top: 3em;
  }

  .rec-dot {
    box-shadow: 0 0 1px 2px var(--secondary-color);
  }

  .rec-dot_active {
    background-color: var(--primary-color);
    box-shadow: 0 0 1px 2px var(--secondary-color);
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  border-radius: 1em;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, .5);
`;
