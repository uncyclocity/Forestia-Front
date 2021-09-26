import styled from 'styled-components';
import FourAnimationedBox from '../../src/boxEle/FourAnimationdBox';
import LblProfilePhoto from '../Atoms/Label/LblProfilePhoto';
import HomeUserNameArea from '../MoleCules/HomeUserNameArea';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 335px;
  height: 165px;
`;

export default function HomeProfileBox() {
  return (
    <FourAnimationedBox>
      <BoxStyle>
        <LblProfilePhoto />
        <HomeUserNameArea />
      </BoxStyle>
    </FourAnimationedBox>
  );
}
