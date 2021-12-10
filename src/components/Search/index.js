import { FiSearch } from 'react-icons/fi';

import {
  Container,
  InputContainer,
  Label,
  Input,
  Divider,
  IconContainer,
} from './styles';

function Search() {
  return (
    <Container>
      <InputContainer spacing={2}>
        <Label>Localização</Label>
        <Input defaultValue="Em que cidade vai ser o show?" />
      </InputContainer>
      <Divider />
      <InputContainer>
        <Label>Estilo Musical</Label>
        <Input defaultValue="Do Jazz ao Axé" />
      </InputContainer>
      <Divider />
      <InputContainer>
        <Label>Artista</Label>
        <Input defaultValue="Nome" />
      </InputContainer>

      <IconContainer>
        <FiSearch size={25} color="white" />
      </IconContainer>
    </Container>
  )
}

export default Search;
