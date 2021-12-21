import Image from 'next/image';
import { FaPhotoVideo } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';

import Hero from '../../Hero';
import Solutions from '../../Solutions';
import Differential from '../../Differential';
import Footer from '../../Footer';
import { Container, Wrapper, IconContainer, CommentContainer, Comment, Item } from './styles';

function SejaArtista() {
  return (
    <Container>
      <Hero
        showButton
        title="Potencialize seu negócio com música ao vivo"
        paragraph="Somos uma plataforma segura e 100% digital criada com o objetivo de
        descomplicar o processo de contratação de shows. São facilidades que vão
        desde encontrar um músico, a montagem da agenda, pagamento simplificado
        e divulgação do show! Acreditamos que a música ao vivo é um grande
        diferencial para o seu estabelecimento!"
      />
      <Solutions />
      <Differential
        inverse
        headerTitle="Conte para o mercado a sua trajetória e construa sua reputação"
      >
        <Wrapper>
          <IconContainer>
            <FaPhotoVideo size={30} color="var(--primary-color)" />
            <p>Fotos, vídeos e Release</p>
          </IconContainer>
          <IconContainer>
            <FaPhotoVideo size={30} color="var(--primary-color)" />
            <p>Fotos, vídeos e Release</p>
          </IconContainer>
          <IconContainer>
            <FaPhotoVideo size={30} color="var(--primary-color)" />
            <p>Fotos, vídeos e Release</p>
          </IconContainer>
          <IconContainer>
            <FaPhotoVideo size={30} color="var(--primary-color)" />
            <p>Fotos, vídeos e Release</p>
          </IconContainer>
          <IconContainer>
            <FaPhotoVideo size={30} color="var(--primary-color)" />
            <p>Fotos, vídeos e Release</p>
          </IconContainer>
        </Wrapper>
      </Differential>
      <Differential
        inverse
        headerTitle="Todas as funcionalidades de um Escritório Tradicional na palma da sua mão"
        title="Aplicativo Eshows"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,"
      >
        <Image src="/assets/stores.png" height={100} width={150} alt="Stores" />
      </Differential>
      <CommentContainer>
        <Comment>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod
          </p>
        </Comment>
        <Carousel showArrows={false} itemsToShow={1} itemPadding={[5, 10]}>

          <Image src="/assets/girl-sing.jpeg" height={200} width={300} alt="Girl singing" />


          <Image src="/assets/girl-sing.jpeg" height={200} width={300} alt="Girl singing" />


          <Image src="/assets/girl-sing.jpeg" height={200} width={300} alt="Girl singing" />


          <Image src="/assets/girl-sing.jpeg" height={200} width={300} alt="Girl singing" />

        </Carousel>
      </CommentContainer>
      <Footer hideImage />
    </Container>
  )
}

export default SejaArtista;
