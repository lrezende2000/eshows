import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: relative;
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  background: url('/assets/party.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Right = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'notice1-image notice1-description'
    'notice2-description notice2-image';
`;

export const NoticeContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;

  margin: 3em 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 500px;

  button {
    padding: .5em 2em;
    border-radius: .5em;

    text-transform: uppercase;
    color: var(--text-light);

    background-color: var(--secondary-color);
  }
`;

export const MainNotice = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;

  color: var(--text-light);
  background: rgba(0, 0, 0, .3);

  .wrapper {
    padding: 2em 5em 2em calc(100vw * 0.1);

    * {
      margin: 1em 0;
    }

    & :not(p) {
      text-transform: uppercase;
    }

    & > span {
      font-size: .8em;
      font-weight: 500;
      color: var(--text-orange);
    }

    p {
      max-width: 80%;
    }

    .stats {
      width: 100%;

      font-size: .8em;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        text-transform: none;
      }
    }
  }
`;

export const Notice = styled.div`
  grid-area: ${(props) => `notice${props.number}-image`};

  background: url('/assets/party.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, .3);
  }
`;

export const NoticeDescription = styled.div`
  grid-area: ${(props) => `notice${props.number}-description`};

  padding: 2em 4em;
  position: relative;

  background-color: var(--tertiary-color);

  :before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    
    ${(props) => {
      if (props.arrowSide === 'right') {
        return css`
          right: -10px;
          border-left: 10px solid var(--tertiary-color);
        `;
      }

      return css`
        left: -10px;
        border-right: 10px solid var(--tertiary-color);
      `;
    }}
  }

  * {
    margin: 1.3em 0;
  }

  span:first-child {
    text-transform: uppercase;
    color: var(--text-orange);
    font-weight: 500;
  }

  span {
    font-size: .9em;
  }
`;
