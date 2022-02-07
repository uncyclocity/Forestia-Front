import { useEffect } from 'react';
import { useDispatch } from '../../../components/Contexts/context';
import PostingPostTemplate from '../../../components/Templates/PostingPostTemplate';
import Head from 'next/head';

export default function Post() {
  const ogImage = '/assets/embed.png';
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
        <title>게시글 작성</title>
        <meta property="og:title" content="게시글 작성" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      <PostingPostTemplate />
    </>
  );
}
