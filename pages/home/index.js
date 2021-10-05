import { useEffect } from 'react';
import { useDispatch } from '../../src/context';
import { getPosting } from '../../src/doApi';
import HomeTemplate from '../../components/Templates/HomeTemplate';
import Head from 'next/head';

export default function Home({ freeBoard, photoBoard }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'home',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>It&#39;s Forestia</title>
      </Head>
      <HomeTemplate freeBoard={freeBoard} photoBoard={photoBoard} />
    </>
  );
}

Home.getInitialProps = async () => {
  const freeBoard = await getPosting.doGetTop3('free');
  const photoBoard = await getPosting.doGetTop3('photo');
  return { freeBoard, photoBoard };
};
