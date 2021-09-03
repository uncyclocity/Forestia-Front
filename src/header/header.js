import Box from '../../styles/box';
import { AppAnimation } from '../../styles/boxAnimation';
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
