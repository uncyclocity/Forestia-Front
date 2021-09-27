import CtnBox from '../Atoms/Container/CtnBox';
import HeaderFourButtons from '../MoleCules/HeaderFourButtons';
import HeaderLogoArea from '../MoleCules/HeaderLogoArea';
import HeaderMiddleArea from '../Organisms/HeaderMiddleArea';

export default function HeaderTemplate() {
  return (
    <>
      <HeaderLogoArea />
      <CtnBox>
        <HeaderMiddleArea />
        <HeaderFourButtons />
      </CtnBox>
    </>
  );
}
