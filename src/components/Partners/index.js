import Image from 'next/image';
import Carousel from 'react-elastic-carousel';

import { Container, Item } from './styles';

function Partners() {
  return (
    <Container>
      <h2>Quem contrata com a <span>Eshows</span></h2>

      <Carousel showArrows={false} itemsToShow={5} itemPadding={[5, 10]}>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
        <Item>
          <Image src="/assets/coco-bambu.png" alt="Partner" width="100%" height="100%" />
        </Item>
      </Carousel>
    </Container>
  )
}

export default Partners;
