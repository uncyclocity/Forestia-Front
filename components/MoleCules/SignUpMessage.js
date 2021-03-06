import styled from 'styled-components';
import TxtTellMeYourNickName from '../Atoms/Text/TxtTellMeYourNickName';
import TxtWelcome from '../Atoms/Text/TxtWelcome';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 30px;
  div:last-child {
    margin-top: 20px;
  }
  @media screen and (max-width: 700px) {
    margin: 30px 0;
  }
`;

export default function SignUpMessage() {
  return (
    <Styles>
      <TxtWelcome />
      <TxtTellMeYourNickName />
    </Styles>
  );
}
