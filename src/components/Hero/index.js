import { useEffect, useRef } from 'react';

import Menu from '../Menu';
import Search from '../Search';
import { Container, SearchContainer } from './styles';

function Hero({ title, paragraph, showSearch, showButton, height, children }) {
  const paragraphRef = useRef();

  useEffect(() => {
    paragraphRef.current.innerHTML = paragraph;
  }, [paragraph]);

  return (
    <Container height={height}>
      <Menu />

      <SearchContainer>
        <h1>{title}</h1>

        {showSearch && <Search />}

        <p ref={paragraphRef}></p>

        {showButton && <button>Quero fazer parte</button>}

        {children}
      </SearchContainer>
    </Container>
  )
}

export default Hero;
