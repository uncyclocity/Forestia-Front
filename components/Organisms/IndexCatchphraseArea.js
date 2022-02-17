import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
import TxtCatchphrase from '../Atoms/Text/TxtCatchphrase';
import HeaderPostingPostButton from '../MoleCules/HeaderPostingPostButton';

const BgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 30px;
  padding: 20px 20px;
  background: #20c997;

  @media screen and (max-width: 700px) {
    padding: 15px 20px 10px 20px;
    border-radius: 0;
    height: 90px;
  }
`;

const CatchphraseStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function IndexCatchphraseArea() {
  return (
    <CtnBox>
      <BgStyle>
        <CatchphraseStyle>
          <TxtCatchphrase
            size="23"
            mSize="20"
            color="white"
            text="풀내음이 함께하는"
          />
          <TxtCatchphrase
            size="23"
            mSize="20"
            color="white"
            text="이야기를 들려주세요"
          />
        </CatchphraseStyle>
        <HeaderPostingPostButton />
      </BgStyle>
    </CtnBox>
  );
}
