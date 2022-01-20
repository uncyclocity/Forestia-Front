import styled from 'styled-components';
import { useReducerState } from '../Contexts/context';
import CtnBox from '../Atoms/Container/CtnBox';
import IcoProfilePhoto from '../Atoms/Label/IcoProfilePhoto';
import IndexLoginArea from '../MoleCules/IndexLoginArea';
import IndexUserNameArea from '../MoleCules/IndexUserNameArea';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 165px;
`;

export default function IndexProfileBox({ accountSettings }) {
  const userId = useReducerState().user.userId;

  return (
    <CtnBox>
      <BoxStyle>
        <IcoProfilePhoto />
        {userId ? (
          <IndexUserNameArea accountSettings={accountSettings} />
        ) : (
          <IndexLoginArea />
        )}
      </BoxStyle>
    </CtnBox>
  );
}
