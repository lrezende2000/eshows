import { Container } from './styles';

function Menu() {
  return (
    <Container>
      <div className="logo" />

      <ul>
        <li>Home</li>
        <li>Para Eventos Particulares</li>
        <li>Para Bares e Restaurante</li>
        <li>Seja um Artista Eshows</li>
        <li><div className="collapse-menu" /></li>
      </ul>
    </Container>
  )
}

export default Menu;
