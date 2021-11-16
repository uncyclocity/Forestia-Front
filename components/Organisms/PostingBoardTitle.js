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

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

const DateStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 5px;
`;

export default function PostingBoardTitle({ nowPostingEleObj }) {
  return (
    <>
      {nowPostingEleObj.board_type === 'free' && (
        <>
          <IcoBoardTitle nowPage="free" />
          <TxtBoardTitle nowPage="free" title={nowPostingEleObj.title} />
        </>
      )}
      {nowPostingEleObj.board_type === 'photo' && (
        <>
          <IcoBoardTitle nowPage="photo" />
          <TxtBoardTitle nowPage="photo" title={nowPostingEleObj.title} />
        </>
      )}
      <AuthorAndDateStyle>
        <TxtPostingAuthor author={nowPostingEleObj.author} />
        <DateStyle>
          <IcoPostingDate />
          <TxtPostingDate date={nowPostingEleObj.date} />
        </DateStyle>
      </AuthorAndDateStyle>
    </>
  );
}
