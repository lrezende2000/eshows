import styled from 'styled-components';

export const Container = styled.section``;

export const EventContainer = styled.div`
  margin-top: 3em;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 5%;
`;

export const Event = styled.div`
  cursor: pointer;

  transition: .1s ease-in;

  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);

    h3 {
      color: var(--text-orange);
    }

    button {
      color: var(--text-light);
      background-color: var(--secondary-color);
    }
  }
`;

export const EventImage = styled.div`
  background: url('/assets/wedding.png');
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
  background-size: cover;

  min-height: 200px;
`;

export const EventDescription = styled.div`
  padding: 1em 3em;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  position: relative;

  ::before {
    content: '';
    width: 0;
    height: 30px;

    position: absolute;
    top: -60px;
    
    border-style: solid;
    border-color: white transparent;
    border-width: 0 40px 30px;
  }

  h3 {
    font-size: 1.5em;
  }

  button {
    padding: .7em 2em;
    border-radius: .5em;

    text-transform: uppercase;
    font-weight: 400;

    background-color: var(--tertiary-color);
  }
`;
