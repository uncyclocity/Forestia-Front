import {
  useDispatch,
  useReducerState,
} from '../../../components/Contexts/context';
import { useEffect } from 'react';
import { doPosting } from '../../../utils/doApi';
import PostingTemplate from '../../../components/Templates/PostingTemplate';
import Head from 'next/head';
import { useRouter } from 'next/router';

const postingPageSwitchOn = (dispatch) => {
  dispatch({
    type: 'posting_page_switcher',
    isPostingPage: true,
  });
};

const postingPageSwitchOff = (dispatch) => {
  dispatch({
    type: 'posting_page_switcher',
    isPostingPage: false,
  });
};

export default function Posting({ nowPostingEleObjRaw, boardType }) {
  const page = useRouter().query.page || 1;
  const dispatch = useDispatch();
  const nowPostingEleObj = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: boardType,
    });
    dispatch({ type: 'editpost_data', nowPostingEleObj: nowPostingEleObjRaw });
    postingPageSwitchOn(dispatch);
    return () => {
      postingPageSwitchOff(dispatch);
    };
  }, [boardType, dispatch, nowPostingEleObjRaw, nowPostingEleObj]);

  return (
    <>
      <Head>
        <title>{nowPostingEleObjRaw.title}</title>
        <meta name="description" content="게시글 페이지입니다." />
      </Head>
      <PostingTemplate
        nowPostingEleObjRaw={nowPostingEleObjRaw}
        boardType={boardType}
        page={page}
      />
    </>
  );
}

Posting.getInitialProps = async (ctx) => {
  const { boardtype: boardType, postid: postId } = ctx.query;
  const getPostingEle = await doPosting.get.ele(boardType, postId);
  const nowPostingEleObjRaw = { ...getPostingEle, boardType };
  return { nowPostingEleObjRaw, boardType };
};
