import { AppAnimation } from '../styles/animation';
import styled from 'styled-components';
import Box from '../styles/box';
import HeaderBar from './headerbar';
import Top from './top';
import FixedHome from './fixedHome';

const BoxStyles = styled.div`
  height: 310px;
`;

export default function Header() {
  return (
    <AppAnimation>
      <Top />
      <HeaderBar />
      <Box>
        <BoxStyles>
          <FixedHome />
        </BoxStyles>
      </Box>
    </AppAnimation>
  );
}
