import { Container, CardContainer, Card } from './styles';

function Pouplar() {
  return (
    <Container>
      <h2>Listas Populares</h2>
      <p>Artistas escolhidos pela <span>Eshows!</span></p>

      <CardContainer>
        <Card>
          <div className="hover">
            <span>Aniversário</span>
          </div>
        </Card>
        <Card>
          <div className="hover">
            <span>Aniversário</span>
          </div>
        </Card>
        <Card>
          <div className="hover">
            <span>Aniversário</span>
          </div>
        </Card>
        <Card>
          <div className="hover">
            <span>Aniversário</span>
          </div>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default Pouplar;
