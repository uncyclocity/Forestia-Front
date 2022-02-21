import styled from 'styled-components';
import IcoBoardTitle from '../Atoms/Icon/IcoBoardTitle';
import IcoPostingDate from '../Atoms/Icon/IcoPostingDate';
import TxtBoardTitle from '../Atoms/Text/TxtBoardTitle';
import TxtPostingAuthor from '../Atoms/Text/TxtPostingAuthor';
import TxtPostingDate from '../Atoms/Text/TxtPostingDate';

const AuthorAndDateStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const DateStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 5px;
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
        <TxtPostingAuthor
          author={author.nickname || '탈퇴한 사용자'}
          color="#20c997"
        />
        <DateStyle>
          <IcoPostingDate />
          <TxtPostingDate date={nowPostingEleObj.date} color="#20c997" />
        </DateStyle>
      </AuthorAndDateStyle>
    </>
  );
}
