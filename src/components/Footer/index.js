import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

import {
  Container,
  Show,
  Footer as FooterStyled,
  LinksContainer,
  LinksGroup,
  Socials
} from './styles';

function Footer({hideImage}) {
  return (
    <Container>
      {!hideImage && <Show />}
      <FooterStyled>
        <div className="logo" />

        <LinksContainer>
          <LinksGroup>
            <a>Sobre Nós</a>
            <a>Contato</a>
          </LinksGroup>
          <LinksGroup>
            <a>Blog</a>
            <a>Termos de uso</a>
          </LinksGroup>
        </LinksContainer>

        <Socials>
          <div className="wrapper">
            <FaFacebookF color="white" size={18} />
          </div>
          <div className="wrapper">
            <FaInstagram color="white" size={18} />
          </div>
          <div className="wrapper">
            <FaLinkedinIn color="white" size={18} />
          </div>
          <div className="wrapper">
            <FaYoutube color="white" size={18} />
          </div>
        </Socials>
      </FooterStyled>
    </Container>
  )
}

export default Footer;
