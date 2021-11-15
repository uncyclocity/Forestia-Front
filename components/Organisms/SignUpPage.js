import styled from 'styled-components';
import SignUpEmailAndNickNameArea from '../MoleCules/SignUpEmailAndNickNameArea';
import SignUpMessage from '../MoleCules/SignUpMessage';

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default function SignUpPage({
  nickName,
  setNickName,
  signUpProcess,
  isOverLap,
  email,
}) {
  return (
    <Styles>
      <SignUpMessage />
      <SignUpEmailAndNickNameArea
        nickName={nickName}
        setNickName={setNickName}
        signUpProcess={signUpProcess}
        isOverLap={isOverLap}
        email={email}
      />
    </Styles>
  );
}
