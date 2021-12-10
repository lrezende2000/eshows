import { Container, EventContainer, Event, EventImage, EventDescription } from './styles';

function Events() {
  return (
    <Container>
      <h2>Para o seu dia especial</h2>
      <p><span>Especialistas</span> em tranasformar o seu dia em uma experiência <span>única</span> e <span>memorável</span>!</p>

      <EventContainer>
        <Event>
          <EventImage />
          <EventDescription>
            <h3>Casamento</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
            <button>Descobrir</button>
          </EventDescription>
        </Event>
        <Event>
          <EventImage />
          <EventDescription>
            <h3>Casamento</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
            <button>Descobrir</button>
          </EventDescription>
        </Event>
        <Event>
          <EventImage />
          <EventDescription>
            <h3>Casamento</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
            <button>Descobrir</button>
          </EventDescription>
        </Event>
      </EventContainer>
    </Container>
  )
}

export default Events;
