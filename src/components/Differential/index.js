/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';

import { Container, ImageContainer, TextContainer } from './styles';

function Differential({ inverse, title, subtitle, paragraph, children }) {
  const titleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    if (title) {
      titleRef.current.innerHTML = title;
    }
  }, [title]);

  useEffect(() => {
    if (subtitle) {
      subtitleRef.current.innerHTML = subtitle;
    }
  }, [subtitle]);


  return (
    <Container inverse={inverse}>
      {inverse ? (
        <>
          <ImageContainer>
            <img width="100%" height="100%" src="/assets/party.jpeg" alt="Image" />
          </ImageContainer>
          <TextContainer>
            <h2 ref={titleRef} />
            <h3 ref={subtitleRef} />
            {paragraph && <p>{paragraph}</p>}
            {children}
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <h2 ref={titleRef} />
            <h3 ref={subtitleRef} />
            {paragraph && <p>{paragraph}</p>}
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
