import { FaQuestionCircle } from 'react-icons/fa'

import { Container, QuestionsContainer, Question } from './styles';

function Faq() {
  return (
    <Container>
      <h2>Perguntas Frequentes</h2>

      <QuestionsContainer>
        <Question>
          <p>Quanto custa para usar a <span>Eshows</span>?</p>
          <FaQuestionCircle size={40} color="var(--secondary-color)" />
        </Question>
        <Question>
          <p>Já possuo um casting fixo na casa, posso utilizar a <span>Eshows</span>?</p>
          <FaQuestionCircle size={40} color="var(--secondary-color)" />
        </Question>
        <Question>
          <p>Como funciona o pagamento?</p>
          <FaQuestionCircle size={40} color="var(--secondary-color)" />
        </Question>
        <Question>
          <p>Como funciona em relação as Notas Fiscais?</p>
          <FaQuestionCircle size={40} color="var(--secondary-color)" />
        </Question>
      </QuestionsContainer>
    </Container>
  )
}

export default Faq;
