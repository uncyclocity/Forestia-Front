import styled from 'styled-components';
import { useReducerState } from '../Contexts/context';
import CtnBox from '../Atoms/Container/CtnBox';
import IcoProfilePhoto from '../Atoms/Icon/IcoProfilePhoto';
import IndexLoginArea from '../MoleCules/IndexLoginArea';
import IndexUserNameArea from '../MoleCules/IndexUserNameArea';
import { BiUser, BiUserX } from 'react-icons/bi';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 165px;
  align-items: center;
`;

export default function IndexProfileBox({ accountSettings }) {
  const userId = useReducerState().user.userId;

  return (
    <CtnBox>
      {userId ? (
        <BoxStyle>
          <IcoProfilePhoto statusIcon={<BiUser />} />
          <IndexUserNameArea accountSettings={accountSettings} />
        </BoxStyle>
      ) : (
        <BoxStyle>
          <IcoProfilePhoto statusIcon={<BiUserX />} />
          <IndexLoginArea />
        </BoxStyle>
      )}
    </CtnBox>
  );
}
