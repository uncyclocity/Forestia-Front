import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
import BoardTitleTemplate from './BoardTitleTemplate';
import SignUpBoardTitle from '../Organisms/SignUpBoardTitle';
import SignUpPage from '../Organisms/SignUpPage';

const Styles = styled.div`
  padding: 20px 30px 5px 30px;
`;

export default function SignUpTemplate({
  nickName,
  setNickName,
  signUpProcess,
  isOverLap,
  email,
}) {
  const homeUrl = '/';

  return (
    <CtnBox>
      <Styles>
        <BoardTitleTemplate backURL={homeUrl}>
          <SignUpBoardTitle />
        </BoardTitleTemplate>
        <SignUpPage
          nickName={nickName}
          setNickName={setNickName}
          signUpProcess={signUpProcess}
          isOverLap={isOverLap}
          email={email}
        />
      </Styles>
    </CtnBox>
  );
}
