import { useReducerState } from '../../common/context';
import styled from 'styled-components';
import { BtnLogInOut } from '../../../components/Atoms/Button/BtnLogInOut';
import LblProfilePhoto from '../../../components/Atoms/Label/LblProfilePhoto';
import TxtProfileName from '../../../components/Atoms/Text/TxtProfileName';

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileNameAndBtnStyle = styled.div`
  width: 50%;
  height: 165px;
  font-size: 20px;
  color: #828c99;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function ProfileBox() {
  const userName = useReducerState().userName;

  return (
    <LayoutStyle>
      <LblProfilePhoto />
      <ProfileNameAndBtnStyle>
        <TxtProfileName userName={userName} />
        <BtnLogInOut text="로그아웃" />
      </ProfileNameAndBtnStyle>
    </LayoutStyle>
  );
}
