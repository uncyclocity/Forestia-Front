import { useEffect } from 'react';
import { useDispatch } from '../components/Contexts/context';
import { doPosting } from '../utils/doApi';
import IndexTemplate from '../components/Templates/IndexTemplate';
import Head from 'next/head';

export default function Index({ freeBoard, photoBoard }) {
  const ogImage = '/assets/embed.png';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'index',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>It&#39;s Forestia</title>
        <meta property="og:title" content="It's Forestia" />
        <meta
          property="og:description"
          content="풀내음나는 자취 커뮤니티 포레스티아입니다."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      <IndexTemplate freeBoard={freeBoard} photoBoard={photoBoard} />
    </>
  );
}

Index.getInitialProps = async () => {
  const freeBoard = await doPosting.get.top3('free');
  const photoBoard = await doPosting.get.top3('photo');
  return { freeBoard, photoBoard };
};
