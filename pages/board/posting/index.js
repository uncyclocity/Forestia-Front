import { useDispatch } from '../../../src/common/context';
import { useEffect } from 'react';
import {
  postPageSwitchOff,
  postPageSwitchOn,
} from '../../../src/board/posting/etcFunc/postpageSwitching';
import { mountAnimation } from '../../../src/common/animationController';
import { getPosting } from '../../../src/doApi/doApi';
import setNowPostingEle from '../../../src/common/setNowPostingEle';
import PostingTemplate from '../../../components/Templates/PostingTemplate';

export default function Post({ nowPostingEleObjRaw, board_type }) {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, board_type);
    setNowPostingEle(dispatch, nowPostingEleObjRaw);
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [board_type, dispatch, nowPostingEleObjRaw]);

  return (
    <PostingTemplate
      nowPostingEleObjRaw={nowPostingEleObjRaw}
      board_type={board_type}
    />
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
