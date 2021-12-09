import { useState } from 'react';
import CtnBox from '../Atoms/Container/CtnBox';
import PostingBoardTitle from '../Organisms/PostingBoardTitle';
import PostingComment from '../Organisms/PostingComment';
import PostingContentAndUpDown from '../Organisms/PostingContentAndUpDown';
import BoardTitleTemplate from './BoardTitleTemplate';
import styled from 'styled-components';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingTemplate({ nowPostingEleObjRaw, boardType }) {
  const [nowPostingEleObj, setNowPostingEleObj] = useState(nowPostingEleObjRaw);
  const backURL = `/board/boardlist/${boardType}?page=1`;

  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL={backURL}>
          <PostingBoardTitle nowPostingEleObj={nowPostingEleObj} />
        </BoardTitleTemplate>
        <PostingContentAndUpDown
          nowPostingEleObj={nowPostingEleObj}
          setNowPostingEleObj={setNowPostingEleObj}
        />
        <PostingComment
          nowPostingEleObj={nowPostingEleObj}
          setNowPostingEleObj={setNowPostingEleObj}
        />
      </BoxStyles>
    </CtnBox>
  );
}
