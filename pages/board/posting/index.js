import { useDispatch, useReducerState } from '../../../src/context';
import { useEffect } from 'react';
import { getPosting } from '../../../src/doApi';
import PostingTemplate from '../../../components/Templates/PostingTemplate';
import Head from 'next/head';

const postPageSwitchOn = (dispatch) => {
  dispatch({
    type: 'postpage_switcher',
    isPostPage: true,
  });
};

const postPageSwitchOff = (dispatch) => {
  dispatch({
    type: 'postpage_switcher',
    isPostPage: false,
  });
};

export default function Post({ nowPostingEleObjRaw, board_type }) {
  const dispatch = useDispatch();
  const nowPostingEleObj = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: board_type,
    });
    dispatch({ type: 'editpost_data', nowPostingEleObj: nowPostingEleObjRaw });
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [board_type, dispatch, nowPostingEleObjRaw, nowPostingEleObj]);

  return (
    <>
      <Head>
        <title>{nowPostingEleObjRaw.title}</title>
      </Head>
      <PostingTemplate
        nowPostingEleObjRaw={nowPostingEleObjRaw}
        board_type={board_type}
      />
    </>
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
