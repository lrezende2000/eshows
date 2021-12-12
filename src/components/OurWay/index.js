import { AiFillStar } from 'react-icons/ai';
import { BsCheckLg, BsExclamationLg } from 'react-icons/bs';

import { Container, WaysContainer, Way } from './styles';

function OurWay() {
  return (
    <Container>
      <h2>Descubra o jeito <span>Eshow</span> de contratar artistas</h2>

      <WaysContainer>
        <Way>
          <div className="icon-wrapper">
            <AiFillStar color="white" size={50} />
          </div>
          <span>Artistas de Qualidade</span>
        </Way>
        <Way inverse>
          <div className="icon-wrapper">
            <BsCheckLg color="white" size={50} />
          </div>
          <span>Rápido e Seguro</span>
        </Way>
        <Way>
          <div className="icon-wrapper">
            <BsExclamationLg color="white" size={50} />
          </div>
          <span>Sem taxas escondidas</span>
        </Way>
      </WaysContainer>
    </Container>
  )
}

export default OurWay;
