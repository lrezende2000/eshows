import Link from 'next/link';

import { Container } from './styles';

function Menu() {
  return (
    <Container>
      <div className="logo" />

      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/bares_e_restaurantes">Para Eventos Particulares</Link></li>
        <li>Para Bares e Restaurante</li>
        <li>Seja um Artista Eshows</li>
        <li><div className="collapse-menu" /></li>
      </ul>
    </Container>
  )
}

export default Menu;
