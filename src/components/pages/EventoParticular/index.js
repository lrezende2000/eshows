import { MdMessage } from 'react-icons/md';
import { ImQuotesLeft } from 'react-icons/im';

import Hero from '../../Hero';
import Differential from '../../Differential';
import Faq from '../../Faq';
import Footer from '../../Footer';
import {
  Container,
  ButtonsContainer,
  ButtonGroup,
  Button,
  StepsContainer,
  Step,
  CommentContainer,
  Comment
} from './styles';

function EventoParticular() {
  return (
    <Container>
      <Hero
        height="auto"
        title="Transforme sua festa com música ao vivo."
        paragraph="We work from sketch by pro artist and code by pro
        coder! It is a long established fact that a reader
        will be distracted"
      >
        <ButtonsContainer>
          <ButtonGroup>
            <Button
              fullWidth
              border="gray"
              background="var(--secondary-color)"
              color="var(--text-light)"
            >
              Explorar
            </Button>
            <Button
              fullWidth
              border="black"
              background="transparent"
              color="black"
            >
              Fale Conosco
            </Button>
          </ButtonGroup>
          <Button
            fullWidth
            border="white"
            background="var(--primary-color)"
            color="var(--text-light)"
          >
            CONTRATAR AGORA
          </Button>
        </ButtonsContainer>

        <StepsContainer>
          <Step>
            <div className="square">
              <MdMessage size={25} color="white" />
            </div>
            <h3>1° passo</h3>
            <p>Você nos diz sobre o seu evento.</p>
          </Step>
          <Step>
            <div className="square">
              <MdMessage size={25} color="white" />
            </div>
            <h3>2° passo</h3>
            <p>Você nos diz sobre o seu evento.</p>
          </Step>
          <Step>
            <div className="square">
              <MdMessage size={25} color="white" />
            </div>
            <h3>3° passo</h3>
            <p>Você nos diz sobre o seu evento.</p>
          </Step>
        </StepsContainer>
      </Hero>

      <Differential
        inverse
      >
        <CommentContainer>
          <ImQuotesLeft size={40} />
          <Comment>
            <p>
              If {'you\'re'} starting a new business or
              upgrading an existing site, I strongly
              recommend using mebooo services. The
              people are friendly, knowledgeable, and
              dedicated to producing a high quality
              product.
            </p>
            <span className="name">Leonardo Rocha</span>
            <span className="role">CEO at <span className="text-pink">abc.com</span></span>
          </Comment>
        </CommentContainer>
      </Differential>

      <Differential
        title="Outras festas com artistas <span>Eshows</span>"
        paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
      >
        <Button
          background="var(--secondary-color)"
        >
          Contratar Agora
        </Button>
      </Differential>

      <Differential
        inverse
        title="Nós cuidamos da música ao vivo para você"
        paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
      >
        <Button
          background="var(--primary-color)"
        >
          Contratar Agora
        </Button>
      </Differential>

      <Differential
        title="Especialistas em criar experiências incríveis"
        paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
      >
        <Button
          background="var(--secondary-color)"
        >
          Contratar Agora
        </Button>
      </Differential>

      <Faq />

      <Footer hideImage />
    </Container>
  )
}

export default EventoParticular
