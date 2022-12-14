import styled from "styled-components";
import SideBar from '../SideBar';
import MenuBar from '../MenuBar';
import Main from '../Main';
import { Container, Wrapper } from './styles';

const Layout = () => {
    return(
        <Container>
            <Wrapper>
                <MenuBar/>
                <Main/>
                <SideBar/>
            </Wrapper>
        </Container>
    )
};

export default Layout;