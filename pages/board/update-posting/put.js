import { useEffect } from 'react';
import {
  useDispatch,
  useReducerState,
} from '../../../components/Contexts/context';
import PostingPutTemplate from '../../../components/Templates/PostingPutTemplate';
import Head from 'next/head';
import Router from 'next/router';

export default function Put() {
  const dispatch = useDispatch();
  const { boardType, id } = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'put',
    });
    if (!boardType || !id) {
      Router.push('/404');
    }
  }, [boardType, dispatch, id]);

  return (
    <>
      <Head>
        <title>게시글 수정</title>
        <meta name="description" content="게시글 수정 페이지입니다." />
      </Head>
      <PostingPutTemplate boardType={boardType} id={id} />
    </>
  );
}
