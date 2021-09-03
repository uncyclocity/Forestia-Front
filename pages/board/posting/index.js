import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../../src/_context';
import { useEffect } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../../src/animationController';
import St_post from '../../../styles/pages/board/St_post';
import {
  postPageSwitchOff,
  postPageSwitchOn,
} from '../../../src/posting/etcFunc/postpageSwitching';
import getPostingEleState from '../../../src/posting/etcFunc/getPostingEleState';
import UpAndDown from '../../../src/posting/pageEle/upAndDown';
import InBoardTitle from '../../../src/posting/pageEle/inBoardTitle';
import CommentInput from '../../../src/posting/pageEle/commentInput';
import CommentList from '../../../src/posting/pageEle/commentList';

export default function Post() {
  const state = useReducerState();
  const router = useRouter();
  const dispatch = useDispatch();
  const { board_type, post_id } = router.query;

  const nowPostingEleObj = getPostingEleState(state, board_type, post_id);

  useEffect(() => {
    mountAnimation(dispatch, board_type);
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [board_type, dispatch]);

  const doDeleteComment = (comment_id) => {
    if (confirm('정말로 삭제하시겠습니까')) {
      unmountAnimation(
        0,
        dispatch,
        `/board/update_comment/commDeleting?boardType=${board_type}&post_id=${post_id}&comment_id=${comment_id}`,
      );
    }
  };

  return (
    <St_post>
      <Board_title
        backURL={`/board/board_list/${board_type}`}
        nowPostingEleObj={nowPostingEleObj}
      >
        <InBoardTitle nowPostingEleObj={nowPostingEleObj} />
      </Board_title>
      <div className="post_content">{nowPostingEleObj.content}</div>
      <UpAndDown nowPostingEleObj={nowPostingEleObj} />
      <CommentList
        nowPostingEleObj={nowPostingEleObj}
        doDeleteComment={doDeleteComment}
      />
      <CommentInput nowPostingEleObj={nowPostingEleObj} />
    </St_post>
  );
}
