import { useEffect } from 'react';
import { useDispatch } from '../../../components/Contexts/context';
import PostingPostTemplate from '../../../components/Templates/PostingPostTemplate';
import Head from 'next/head';

export default function Post() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'post',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <meta property="og:title" content="게시글 작성" />
      </Head>
      <PostingPostTemplate />
    </>
  );
}
