import Box from "../components/box";
import Header from "../components/Header";
import CenterAlign from "../components/centerAlign";
import FixedHome from "../components/fixedHome";
import styled from "styled-components";
import Context from "./_context";
import { slideUp } from "../styles/keyframes/slide";
import Top from "../components/top";

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
          <Top />
        </Animation>
        <Animation>
          <Header />
        </Animation>
        <Animation>
          <Box>
            <BoxStyles>
              <FixedHome />
            </BoxStyles>
          </Box>
        </Animation>
        <Component {...pageProps} />
      </CenterAlign>
    </Context>
  );
}
