import Lists from '../Lists';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";
const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <Lists elements={<h1>Test</h1>} />
          <Lists elements={<h1>Test</h1>} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
