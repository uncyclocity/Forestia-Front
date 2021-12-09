import { useDispatch, useReducerState } from '../../../src/context';
import { useEffect } from 'react';
import { doPosting } from '../../../src/doApi';
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

export default function Post({ nowPostingEleObjRaw, boardType }) {
  const dispatch = useDispatch();
  const nowPostingEleObj = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: boardType,
    });

    setTimeout(
      () =>
        dispatch({
          type: 'postcnt_switcher',
          sw: false,
        }),
      1000,
    );
    dispatch({ type: 'editpost_data', nowPostingEleObj: nowPostingEleObjRaw });
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [boardType, dispatch, nowPostingEleObjRaw, nowPostingEleObj]);

  return (
    <>
      <Head>
        <title>{nowPostingEleObjRaw.title}</title>
      </Head>
      <PostingTemplate
        nowPostingEleObjRaw={nowPostingEleObjRaw}
        boardType={boardType}
      />
    </>
  );
}

Post.getInitialProps = async (ctx) => {
  const { boardtype: boardType, postid: postId } = ctx.query;
  const getPostingEle = await doPosting.get.ele(
    boardType,
    postId,
  );
  const nowPostingEleObjRaw = { ...getPostingEle, boardType };
  return { nowPostingEleObjRaw, boardType };
};
