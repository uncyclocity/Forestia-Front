import { AppAnimation } from "../styles/animation";
import styled from "styled-components";
import Box from "../styles/box";
import Header from "./Header";
import Top from "./top";
import FixedHome from "./fixedHome";

const BoxStyles = styled.div`
  height: 310px;
`;

export default function Footer() {
  return (
    <AppAnimation>
      <Top />
      <Header />
      <Box>
        <BoxStyles>
          <FixedHome />
        </BoxStyles>
      </Box>
    </AppAnimation>
  );
}
