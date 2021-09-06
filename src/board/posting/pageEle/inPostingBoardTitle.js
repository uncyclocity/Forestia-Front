import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import styled from 'styled-components';

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
      <div className="icon">
        {nowPostingEleObj.board_type === 'free' && <AiOutlineCloud />}
        {nowPostingEleObj.board_type === 'photo' && <AiOutlineCamera />}
      </div>
      <div className="title_name">{nowPostingEleObj.title}</div>
      <AuthorAndDateStyle>
        <div className="author">{nowPostingEleObj.author}</div>
        <div className="date">
          <div className="date_icon">
            <BiTime />
          </div>
          {nowPostingEleObj.date}
        </div>
      </AuthorAndDateStyle>
    </>
  );
}
