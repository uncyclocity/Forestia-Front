import BoardTitle from '../../../src/common/boardTitle';
import { useDispatch } from '../../../src/common/context';
import { useEffect, useState } from 'react';
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
import { getPosting } from '../../../src/doApi/doApi';
import setNowPostingEle from '../../../src/common/setNowPostingEle';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function Post({ nowPostingEleObjRaw, board_type }) {
  const dispatch = useDispatch();
  const backURL = `/board/board_list/${board_type}?page=1`;
  const [nowPostingEleObj, setNowPostingEleObj] = useState(nowPostingEleObjRaw);

  useEffect(() => {
    mountAnimation(dispatch, board_type);
    setNowPostingEle(dispatch, nowPostingEleObjRaw);
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [board_type, dispatch, nowPostingEleObjRaw]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle backURL={backURL} nowPostingEleObj={nowPostingEleObj}>
          <InPostingBoardTitle nowPostingEleObj={nowPostingEleObj} />
        </BoardTitle>
        <ContentView nowPostingEleObj={nowPostingEleObj} />
        <ImageView nowPostingEleObj={nowPostingEleObj} />
        <UpAndDown
          nowPostingEleObj={nowPostingEleObj}
          setNowPostingEleObj={setNowPostingEleObj}
        />
        <CommentList
          nowPostingEleObj={nowPostingEleObj}
          setNowPostingEleObj={setNowPostingEleObj}
        />
        <CommentInput
          nowPostingEleObj={nowPostingEleObj}
          setNowPostingEleObj={setNowPostingEleObj}
        />
      </BoxStyles>
    </FourAnimationedBox>
  );
}

Post.getInitialProps = async (ctx) => {
  const { board_type, post_id } = ctx.query;
  const getPostingEle = await getPosting.doGetNowPostingEleObj(
    board_type,
    post_id,
  );
  const nowPostingEleObjRaw = { ...getPostingEle, board_type };
  return { nowPostingEleObjRaw, board_type };
};
