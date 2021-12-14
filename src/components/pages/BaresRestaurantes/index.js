import { BsCheckCircle } from 'react-icons/bs';

import Hero from '../../Hero';
import Solutions from '../../Solutions';
import Differential from '../../Differential';
import Faq from '../../Faq';
import Testimonials from '../../Testimonials';
import Footer from '../../Footer';

import { Container } from './styles';

function BaresRestaurantes() {
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
        title="Resultados"
        subtitle="Melhora a experiência na contratação de música ao vivo."
        paragraph="Responsive web design supply chain crowdfunding agile development analytics technology ownership startup. Network effects social proof user experience prototype buzz product management deployment metrics sales infographic equity holy grail crowdfunding release."
      >
        <button>Saber Mais</button>
      </Differential>
      <Differential
        inverse={false}
        title="Clientes"
        subtitle="Os maiores contratantes utilizam <span>Eshows</span>"
        paragraph="Responsive web design supply chain crowdfunding agile development analytics technology ownership startup. Network effects social proof user experience prototype buzz product management deployment metrics sales infographic equity holy grail crowdfunding release"
      >
        <button>Saber Mais</button>
      </Differential>
      <Differential
        inverse
        title="Ótimas Funcionalidades"
        subtitle="Muitas funcionalidades que otimizam seu workflow"
        paragraph="Responsive web design supply chain crowdfunding agile development analytics technology."
      >
        <div className="funcionalities">
          <div className="funcionality">
            <BsCheckCircle size={40} color="green" />
            <h3>Twitter stealth churn rate early adopters</h3>
          </div>
          <div className="funcionality">
            <BsCheckCircle size={40} color="green" />
            <h3>Responsive web design assets</h3>
          </div>
          <div className="funcionality">
            <BsCheckCircle size={40} color="green" />
            <h3>First mover advantage assets accelerator</h3>
          </div>
        </div>
      </Differential>
      <Faq />
      <Testimonials />
      <Footer hideImage />
    </Container>
  )
}

export default BaresRestaurantes;
