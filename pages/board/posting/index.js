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
import CtnBox from '../../../components/Atoms/Container/CtnBox';
import ContentView from '../../../src/board/posting/pageEle/contentView';
import { mountAnimation } from '../../../src/common/animationController';
import ImageView from '../../../src/board/posting/pageEle/imageView';
import { getPosting } from '../../../src/doApi/doApi';
import setNowPostingEle from '../../../src/common/setNowPostingEle';
import BoardTitleTemplate from '../../../components/Templates/BoardTitleTemplate';

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
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate
          backURL={backURL}
          nowPostingEleObj={nowPostingEleObj}
        >
          <InPostingBoardTitle nowPostingEleObj={nowPostingEleObj} />
        </BoardTitleTemplate>
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
    </CtnBox>
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
