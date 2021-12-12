import styled from 'styled-components';

export const Container = styled.section`
  padding: 0;
`;

export const Show = styled.div`
  width: 100%;
  height: 300px;

  background: url('/assets/party.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Footer = styled.div`
  padding: 2em calc(100vw * 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--primary-color);

  .logo {
    width: 100px;
    height: 40px;
    background: white;
  }
`;

export const LinksContainer = styled.div`
  display: flex;

  color: var(--text-light);
  font-size: .9em;
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 3em;
  }

  a + a {
    margin-top: 1em;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;

  gap: 1em;

  .wrapper {
    padding: 1em;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--secondary-color);
  }
`;
