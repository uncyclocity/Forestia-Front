import { AppAnimation } from '../../src/boxEle/boxAnimation';
import CtnBox from '../Atoms/Container/CtnBox';
import HeaderFourButtons from '../MoleCules/HeaderFourButtons';
import HeaderLogoArea from '../MoleCules/HeaderLogoArea';
import HeaderMiddleArea from '../Organisms/HeaderMiddleArea';

export default function Header() {
  return (
    <AppAnimation>
      <HeaderLogoArea />
      <CtnBox>
        <HeaderMiddleArea />
        <HeaderFourButtons />
      </CtnBox>
    </AppAnimation>
  );
}
