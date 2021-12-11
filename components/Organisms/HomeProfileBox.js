import styled from 'styled-components';
import { useReducerState } from '../../src/context';
import CtnBox from '../Atoms/Container/CtnBox';
import LblProfilePhoto from '../Atoms/Label/LblProfilePhoto';
import HomeLoginArea from '../MoleCules/HomeLoginArea';
import HomeUserNameArea from '../MoleCules/HomeUserNameArea';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 165px;
`;

export default function HomeProfileBox({ accountSettings }) {
  const userId = useReducerState().user.userId;

  return (
    <CtnBox>
      <BoxStyle>
        <LblProfilePhoto />
        {userId ? (
          <HomeUserNameArea accountSettings={accountSettings} />
        ) : (
          <HomeLoginArea />
        )}
      </BoxStyle>
    </CtnBox>
  );
}
