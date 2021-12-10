import Menu from '../Menu';
import Search from '../Search';
import { Container, SearchContainer } from './styles';

function Hero() {
  return (
    <Container>
      <Menu />

      <SearchContainer>
        <h1>Encontre e música ao vivo rapidamente</h1>
        <Search />
        <p>ou utilize nosso <span>Produtor Eshows</span> para encontrar o melhor artista para seu evento</p>
      </SearchContainer>
    </Container>
  )
}

export default Hero;
