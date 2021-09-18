import Box from '../../components/Atoms/box';
import { AppAnimation } from '../../src/boxEle/boxAnimation';
import HeaderBar from './headerEle/headerBar';
import Top from './headerEle/top';
import Title from './headerEle/title';

export default function Header() {
  return (
    <AppAnimation>
      <Top />
      <Box>
        <Title />
        <HeaderBar />
      </Box>
    </AppAnimation>
  );
}
