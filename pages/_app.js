import Box from "../components/box";
import Header from "../components/Header";
import CenterAlign from "../components/centerAlign";
import Home from "../components/home";
import styled, { keyframes } from "styled-components";
import Context from "./_context";
import { slideUp } from "../styles/keyframes/slide";

const BoxStyles = styled.div`
  height: 310px;
`;

const Animation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <CenterAlign>
        <Animation>
          <Header />
        </Animation>
        <Animation>
          <Box>
            <BoxStyles>
              <Home />
            </BoxStyles>
          </Box>
        </Animation>
        <Component {...pageProps} />
      </CenterAlign>
    </Context>
  );
}
