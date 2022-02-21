import { BiUser } from 'react-icons/bi';
import styled from 'styled-components';
import IcoBoardTitle from '../Atoms/Icon/IcoBoardTitle';
import IcoPostingDate from '../Atoms/Icon/IcoPostingDate';
import TxtBoardTitle from '../Atoms/Text/TxtBoardTitle';
import TxtPostingAuthor from '../Atoms/Text/TxtPostingAuthor';
import TxtPostingDate from '../Atoms/Text/TxtPostingDate';
import HicProfilePhoto from '../Atoms/HybridIcon/HicProfilePhoto';

const AuthorAndDateStyle = styled.div`
  display: flex;
  margin-top: 10px;
`;

const DateStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 5px;

  & > div + div {
    margin-left: 3px;
  }
`;

export default function PostingBoardTitle({ nowPostingEleObj, author }) {
  return (
    <>
      {nowPostingEleObj.boardType === 'free' && (
        <>
          <IcoBoardTitle nowPage="free" />
          <TxtBoardTitle nowPage="free" title={nowPostingEleObj.title} />
        </>
      )}
      {nowPostingEleObj.boardType === 'photo' && (
        <>
          <IcoBoardTitle nowPage="photo" />
          <TxtBoardTitle nowPage="photo" title={nowPostingEleObj.title} />
        </>
      )}
      <AuthorAndDateStyle>
        <DateStyle>
          <HicProfilePhoto
            statusIcon={<BiUser />}
            bgColor="#20c997"
            color="white"
            size="18"
            padding="3"
            imageUrl={author.imageUrl}
          />
          <TxtPostingAuthor
            author={author.nickname || '탈퇴한 사용자'}
            color="#20c997"
          />
        </DateStyle>
        <DateStyle>
          <IcoPostingDate />
          <TxtPostingDate date={nowPostingEleObj.date} color="#20c997" />
        </DateStyle>
      </AuthorAndDateStyle>
    </>
  );
}
