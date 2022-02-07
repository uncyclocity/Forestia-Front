import { useEffect } from 'react';
import {
  useDispatch,
  useReducerState,
} from '../../../components/Contexts/context';
import PostingPutTemplate from '../../../components/Templates/PostingPutTemplate';
import Head from 'next/head';
import Router from 'next/router';

export default function Put() {
  const ogImage = '/assets/embed.png';
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
        <meta property="og:title" content="게시글 수정" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      <PostingPutTemplate boardType={boardType} id={id} />
    </>
  );
}
