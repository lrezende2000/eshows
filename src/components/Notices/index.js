import {
  Container,
  Left,
  Right,
  NoticeContainer,
  MainNotice,
  Notice,
  NoticeDescription,
} from './styles';

function Notices() {
  return (
    <Container>
      <h2>Notícias Populares</h2>

      <NoticeContainer>
        <Left>
          <MainNotice>
            <div className="wrapper">
              <span>Dicas</span>
              <h3>Casamento e músico ao vivo</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam
              </p>
              <div className="stats">
                <span>357 reviews</span>
                <button>Ver notícia</button>
              </div>
            </div>
          </MainNotice>
        </Left>
        <Right>

          <Notice number="1">
            <div className="wrapper">
              <button>Ver notícia</button>
            </div>
          </Notice>
          <NoticeDescription number="1">
            <span>Tendência</span>
            <h3>Novos instrumentos</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <span>357 reviews</span>
          </NoticeDescription>


          <Notice number="2">
            <div className="wrapper">
              <button>Ver notícia</button>
            </div>
          </Notice>
          <NoticeDescription arrowSide="right" number="2">
            <span>Tecnologia</span>
            <h3>Novos instrumentos</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <span>357 reviews</span>
          </NoticeDescription>

        </Right>
      </NoticeContainer>
    </Container>
  )
}

export default Notices;
