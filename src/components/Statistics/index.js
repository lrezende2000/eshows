import { Container, Statistic, Icon, Values } from './styles';

function Statistics() {
  return (
    <Container>

      <Statistic>
        <Icon />
        <Values>
          <span className="value">25.000</span>
          <span className="label">Shows Realizados</span>
        </Values>
      </Statistic>
      <Statistic>
        <Icon />
        <Values>
          <span className="value">3000</span>
          <span className="label">Projetos Musicais</span>
        </Values>
      </Statistic>
      <Statistic>
        <Icon />
        <Values>
          <span className="value">100</span>
          <span className="label">Palcos</span>
        </Values>
      </Statistic>
      <Statistic>
        <Icon />
        <Values>
          <span className="value">R$25Mi</span>
          <span className="label">Em Contratações</span>
        </Values>
      </Statistic>
    </Container>
  )
}

export default Statistics;
