import styled from 'styled-components';
import TxtMyEmail from '../Atoms/Text/TxtMyEmail';
import TxtMyNickName from '../Atoms/Text/TxtMyNickName';
import IptNickName from '../Atoms/Input/IptNickName';
import BtnLogInOut from '../Atoms/Button/BtnLogInOut';
import TxtSameNickName from '../Atoms/Text/TxtSameNickName';

const LayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
  width: 100%;
`;

const NickNameInputStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const SigninBtnStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  div:last-child {
    margin-left: auto;
  }
`;

export default function SignUpEmailAndNickNameArea({
  nickName,
  setNickName,
  signUpProcess,
  isOverLap,
  email,
}) {
  return (
    <LayoutStyle>
      <TxtMyEmail email={email} />
      <NickNameInputStyle>
        <TxtMyNickName />
        <IptNickName
          onChange={(e) => setNickName(e.target.value)}
          value={nickName}
        />
      </NickNameInputStyle>
      <SigninBtnStyle>
        {isOverLap && <TxtSameNickName />}
        <BtnLogInOut text="회원가입" onClick={signUpProcess} />
      </SigninBtnStyle>
    </LayoutStyle>
  );
}
