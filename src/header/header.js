import CtnBox from '../../components/Atoms/CtnBox';
import { AppAnimation } from '../../src/boxEle/boxAnimation';
import HeaderBar from './headerEle/headerBar';
import Top from './headerEle/top';
import Title from './headerEle/title';

export default function Header() {
  return (
    <AppAnimation>
      <Top />
      <CtnBox>
        <Title />
        <HeaderBar />
      </CtnBox>
    </AppAnimation>
  );
}
