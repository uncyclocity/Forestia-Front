import { BiUser, BiUserX } from 'react-icons/bi';
import styled from 'styled-components';
import HicProfilePhoto from '../Atoms/HybridIcon/HicProfilePhoto';
import TxtCatchphrase from '../Atoms/Text/TxtCatchphrase';
import TxtSubCatchphrase from '../Atoms/Text/TxtSubCatchphrase';
import { useReducerState } from '../Contexts/context';

const ProfileBtnStyle = styled.div`
  display: flex;
  align-items: center;
`;

const CatchphraseStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const BgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  div {
    margin-right: 5px;
  }
`;

export default function IndexCpAreaProfileImgAndCp() {
  const { userId, imageUrl } = useReducerState().user;

  return (
    <BgStyle>
      <ProfileBtnStyle>
        {userId ? (
          <HicProfilePhoto
            statusIcon={<BiUser />}
            bgColor="white"
            color="#20c997"
            size="26"
            padding="6"
            imageUrl={imageUrl}
          />
        ) : (
          <HicProfilePhoto
            statusIcon={<BiUserX />}
            bgColor="white"
            color="#828c99"
            size="26"
            padding="6"
          />
        )}
      </ProfileBtnStyle>
      <CatchphraseStyle>
        <TxtCatchphrase
          size="20"
          mSize="16"
          color="white"
          text="풀내음이 함께하는 이야기를 들려주세요 :)"
        />
        <TxtSubCatchphrase
          size="13"
          mSize="12"
          color="white"
          text="게시글 작성하기"
        />
      </CatchphraseStyle>
    </BgStyle>
  );
}
