import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/context';
import DeleteTemplate from '../../../components/Templates/DeleteTemplate';
import { doImage, doPosting } from '../../../src/doApi';
import Router from 'next/router';
import Head from 'next/head';

const letsDeletePostingAndImage = async (nowPostingEleObj, dispatch) => {
  const { boardType, id, imagesUrl } = nowPostingEleObj;
  if (boardType && id && imagesUrl) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });
    await doPosting.delete(boardType, id);
    imagesUrl.length > 0 && (await doImage.delete(imagesUrl));
    Router.push(`/board/boardlist/${boardType}?page=1`);
    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  } else {
    Router.push('/404');
  }
};

export default function Delete() {
  const dispatch = useDispatch();
  const nowPostingEleObj = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'delete',
    });
    letsDeletePostingAndImage(nowPostingEleObj, dispatch);
    return () => {
      dispatch({ type: 'editpost_data', nowPostingEleObj: {} });
    };
  }, [dispatch, nowPostingEleObj]);

  return (
    <>
      <Head>
        <title>게시글 삭제 중</title>
        <meta name="description" content="게시글 삭제중 페이지입니다." />
      </Head>
      <DeleteTemplate />
    </>
  );
}
