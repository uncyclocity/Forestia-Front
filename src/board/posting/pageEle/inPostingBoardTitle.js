import { BiTime } from 'react-icons/bi';
import styled from 'styled-components';
import IcoBoardTitle from '../../../../components/Atoms/IcoBoardTitle';
import IcoPostingDate from '../../../../components/Atoms/IcoPostingDate';
import TxtBoardTitle from '../../../../components/Atoms/TxtBoardTitle';
import TxtPostingAuthor from '../../../../components/Atoms/TxtPostingAuthor';
import TxtPostingDate from '../../../../components/Atoms/TxtPostingDate';

const AuthorAndDateStyle = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 10px;

  .author {
    padding: 0 5px;
    font-weight: bold;
  }

  .date {
    display: flex;
    flex-direction: row;
    padding: 0 5px;

    .date_icon {
      transform: translateY(1px);
    }
  }
`;

export default function InPostingBoardTitle({ nowPostingEleObj }) {
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
        <div className="date">
          <IcoPostingDate />
          <TxtPostingDate date={nowPostingEleObj.date} />
        </div>
      </AuthorAndDateStyle>
    </>
  );
}
