import styled from 'styled-components';
import { useReducerState } from '../../src/context';
import CtnBox from '../Atoms/Container/CtnBox';
import LblProfilePhoto from '../Atoms/Label/LblProfilePhoto';
import HomeLoginArea from '../MoleCules/HomeLoginArea';
import HomeUserNameArea from '../MoleCules/HomeUserNameArea';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 335px;
  height: 165px;
`;

export default function HomeProfileBox() {
  const userEmail = useReducerState().user.userEmail;

  return (
    <CtnBox>
      <BoxStyle>
        <LblProfilePhoto />
        {userEmail ? <HomeUserNameArea /> : <HomeLoginArea />}
      </BoxStyle>
    </CtnBox>
  );
}
