import { useRouter } from 'next/router';
import BoardTitle from '../../../src/common/boardTitle';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { useEffect } from 'react';
import {
  postPageSwitchOff,
  postPageSwitchOn,
} from '../../../src/board/posting/etcFunc/postpageSwitching';
import UpAndDown from '../../../src/board/posting/pageEle/upAndDown';
import InPostingBoardTitle from '../../../src/board/posting/pageEle/inPostingBoardTitle';
import CommentInput from '../../../src/board/posting/pageEle/commentInput';
import CommentList from '../../../src/board/posting/pageEle/commentList';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import ContentView from '../../../src/board/posting/pageEle/contentView';
import { mountAnimation } from '../../../src/common/animationController';
import ImageView from '../../../src/board/posting/pageEle/imageView';
import instance from '../../../src/common/instance';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function Post({ nowPostingEleObj, board_type }) {
  const dispatch = useDispatch();
  const backURL = `/board/board_list/${board_type}?page=1`;

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

Post.getInitialProps = async (ctx) => {
  const { board_type, post_id } = ctx.query;
  const getPostingEle_res = await instance.get(
    `/api/get_posting/getPostingEle?id=${post_id}&board_type=${board_type}`,
  );
  const nowPostingEleObj = { ...getPostingEle_res.data, board_type };
  return { nowPostingEleObj, board_type };
};
