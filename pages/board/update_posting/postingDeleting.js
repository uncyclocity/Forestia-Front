import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/context';
import DeletingTemplate from '../../../components/Templates/DeletingTemplate';
import { doImage, doPosting } from '../../../src/doApi';
import Router from 'next/router';
import Head from 'next/head';

const letsDeletePostingAndImage = async (nowPostingEleObj, dispatch) => {
  const { board_type, id, imagesUrl } = nowPostingEleObj;
  if (board_type && id && imagesUrl) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });
    await doPosting.delete(board_type, id);
    imagesUrl.length > 0 && (await doImage.delete(imagesUrl));
    Router.push(`/board/board_list/${board_type}?page=1`);
    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  } else {
    Router.push('/404');
  }
};

export default function PostingDeleting() {
  const dispatch = useDispatch();
  const nowPostingEleObj = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'deleting',
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
      </Head>
      <DeletingTemplate />
    </>
  );
}
