/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';

import { Container, ImageContainer, TextContainer } from './styles';

function Differential({ inverse, title, subtitle, paragraph, children }) {
  const subtitleRef = useRef();

  useEffect(() => {
    subtitleRef.current.innerHTML = subtitle;
  }, [subtitle]);

  return (
    <Container inverse={inverse}>
      {inverse ? (
        <>
          <ImageContainer>
            <img width="100%" height="100%" src="/assets/party.jpeg" alt="Image" />
          </ImageContainer>
          <TextContainer>
            <h2>{title}</h2>
            <h3 ref={subtitleRef}></h3>
            <p>{paragraph}</p>
            {children}
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <h2>{title}</h2>
            <h3 ref={subtitleRef}></h3>
            <p>{paragraph}</p>
            {children}
          </TextContainer>
          <ImageContainer>
            <img width="100%" height="100%" src="/assets/party.jpeg" alt="Image" />
          </ImageContainer>
        </>
      )}
    </Container >
  )
}

export default Differential;
