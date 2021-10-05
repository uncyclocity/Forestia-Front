import { useEffect } from 'react';
import { useDispatch } from '../../../src/context';
import PostingCreatingTemplate from '../../../components/Templates/PostingCreatingTemplate';
import Head from 'next/head';

export default function PostingCreating() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'creating',
    });
    dispatch({ type: 'editpost_data', nowPostingEleObj: {} });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>게시글 작성</title>
      </Head>
      <PostingCreatingTemplate />
    </>
  );
}
