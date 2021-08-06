import Box from "../components/box";
import Header from "../components/Header";
import CenterAlign from "../components/centerAlign";
import FixedHome from "../components/fixedHome";
import styled from "styled-components";
import Context from "./_context";
import Top from "../components/top";
import { AppAnimation } from "../styles/animation";

const BoxStyles = styled.div`
  height: 310px;
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <CenterAlign>
        <AppAnimation>
          <Top />
          <Header />
          <Box>
            <BoxStyles>
              <FixedHome />
            </BoxStyles>
          </Box>
        </AppAnimation>
        <Component {...pageProps} />
      </CenterAlign>
    </Context>
  );
}

MyApp.getInitialProps = () => {
  return true;
};
