import Hero from '../../Hero';
import Events from '../../Events';
import Statistics from '../../Statistics';
import Pouplar from '../../Popular';
import Partners from '../../Partners';
import Notices from '../../Notices';
import OurWay from '../../OurWay';
import Footer from '../../Footer';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Hero
        showSearch
        title="Encontre e música ao vivo rapidamente"
        paragraph="ou utilize nosso <span>Produtor Eshows</span> para encontrar o melhor artista para seu evento"
      />
      <Events />
      <Statistics />
      <Pouplar />
      <Partners />
      <Notices />
      <OurWay />
      <Footer />
    </Container>
  )
}

export default Home;
