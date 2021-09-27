import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
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
    <CtnBox>
      <BoxStyle>
        <LblProfilePhoto />
        <HomeUserNameArea />
      </BoxStyle>
    </CtnBox>
  );
}
