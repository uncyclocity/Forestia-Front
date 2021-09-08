import { useRouter } from 'next/router';
import BoardTitle from '../../../src/common/boardTitle';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { useEffect } from 'react';
import {
  postPageSwitchOff,
  postPageSwitchOn,
} from '../../../src/board/posting/etcFunc/postpageSwitching';
import getPostingEleState from '../../../src/board/posting/etcFunc/getPostingEleState';
import UpAndDown from '../../../src/board/posting/pageEle/upAndDown';
import InPostingBoardTitle from '../../../src/board/posting/pageEle/inPostingBoardTitle';
import CommentInput from '../../../src/board/posting/pageEle/commentInput';
import CommentList from '../../../src/board/posting/pageEle/commentList';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import ContentView from '../../../src/board/posting/pageEle/contentView';
import { mountAnimation } from '../../../src/common/animationController';
import ImageView from '../../../src/board/posting/pageEle/imageView';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function Post() {
  const state = useReducerState();
  const router = useRouter();
  const dispatch = useDispatch();
  const { board_type, post_id } = router.query;
  const backURL = `/board/board_list/${board_type}`;
  const nowPostingEleObj = getPostingEleState(state, board_type, post_id);

  useEffect(() => {
    mountAnimation(dispatch, board_type);
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [board_type, dispatch]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle backURL={backURL} nowPostingEleObj={nowPostingEleObj}>
          <InPostingBoardTitle nowPostingEleObj={nowPostingEleObj} />
        </BoardTitle>
        <ContentView nowPostingEleObj={nowPostingEleObj} />
        <ImageView nowPostingEleObj={nowPostingEleObj} />
        <UpAndDown nowPostingEleObj={nowPostingEleObj} />
        <CommentList nowPostingEleObj={nowPostingEleObj} />
        <CommentInput nowPostingEleObj={nowPostingEleObj} />
      </BoxStyles>
    </FourAnimationedBox>
  );
}
