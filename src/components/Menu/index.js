import Link from 'next/link';

import { Container } from './styles';

function Menu() {
  return (
    <Container>
      <div className="logo" />

      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/evento_particular">Para Eventos Particulares</Link></li>
        <li><Link href="/bares_e_restaurantes">Para Bares e Restaurante</Link></li>
        <li><Link href="/seja_artista_eshow">Seja um Artista Eshows</Link></li>
        <li><div className="collapse-menu" /></li>
      </ul>
    </Container>
  )
}

export default Menu;
