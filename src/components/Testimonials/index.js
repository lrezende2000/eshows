import Carousel, { consts } from 'react-elastic-carousel';
import { BsChatQuote } from 'react-icons/bs'

import {
  Container,
  Item,
  Pagination,
  PageIcon,
  FormContainer,
  Form,
  Input,
} from './styles';

const renderPagination = ({ pages, activePage, onClick }) => {
  return (
    <Pagination>
      {pages.map(page => {
        const isActive = activePage === page;

        return (
          <PageIcon
            key={page}
            onClick={() => onClick(page)}
            active={isActive}
          />
        )
      })}
    </Pagination>
  )
}

function Testimonials() {
  return (
    <Container>
      <Carousel
        renderArrow={() => (<></>)}
        renderPagination={renderPagination}
        itemPosition={consts.CENTER}
      >
        <Item>
          <BsChatQuote size={60} color="var(--secondary-color)" />
          <p>
            “Lean startup metrics venture innovator assets angel investor learning
            curve incubator branding advisor termsheet. IPad ecosystem
            conversion android advisor.”
          </p>
          <div className="author">
            <div className="author-image" />
            <div className="author-name">
              <p>Silvia Natalia</p>
              <p>Owner Tanahcon</p>
            </div>
          </div>
        </Item>
        <Item>
          <BsChatQuote size={60} color="var(--secondary-color)" />
          <p>
            “Lean startup metrics venture innovator assets angel investor learning
            curve incubator branding advisor termsheet. IPad ecosystem
            conversion android advisor.”
          </p>
          <div className="author">
            <div className="author-image" />
            <div className="author-name">
              <p>Silvia Natalia</p>
              <p>Owner Tanahcon</p>
            </div>
          </div>
        </Item>
        <Item>
          <BsChatQuote size={60} color="var(--secondary-color)" />
          <p>
            “Lean startup metrics venture innovator assets angel investor learning
            curve incubator branding advisor termsheet. IPad ecosystem
            conversion android advisor.”
          </p>
          <div className="author">
            <div className="author-image" />
            <div className="author-name">
              <p>Silvia Natalia</p>
              <p>Owner Tanahcon</p>
            </div>
          </div>
        </Item>
      </Carousel>

      <FormContainer>
        <Form>
          <h3>Cadastre seu estabelecimento</h3>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          </p>

          <Input placeholder="Seu nome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <Input placeholder="Cidade" />
          <Input placeholder="Nome do Estabelecimento" />

          <button>Enviar</button>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Testimonials;
