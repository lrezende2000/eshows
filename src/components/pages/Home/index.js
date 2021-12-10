import Hero from '../../Hero';
import Events from '../../Events';
import Statistics from '../../Statistics';
import Pouplar from '../../Popular';
import Partners from '../../Partners';
import Notices from '../../Notices';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Hero />
      <Events />
      <Statistics />
      <Pouplar />
      <Partners />
      <Notices />
    </Container>
  )
}

export default Home;
