import { useEffect } from 'react';
import { useDispatch } from '../components/Contexts/context';
import { doPosting, doUser } from '../utils/doApi';
import IndexTemplate from '../components/Templates/IndexTemplate';
import Head from 'next/head';

export default function Index({ board, authorArr }) {
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
      <IndexTemplate board={board} authorArr={authorArr} />
    </>
  );
}

Index.getInitialProps = async () => {
  const freeBoard = await doPosting.get.top3('free');
  const photoBoard = await doPosting.get.top3('photo');
  const authorArr = [];
  const unifiedBoard = [
    ...freeBoard.map((posting) => {
      return {
        ...posting,
        boardType: 'free',
        dateVal: Date.parse(posting.date),
      };
    }),
    ...photoBoard.map((posting) => {
      return {
        ...posting,
        boardType: 'photo',
        dateVal: Date.parse(posting.date),
      };
    }),
  ].sort((a, b) => b.dateVal - a.dateVal);
  for (let i = 0; i < unifiedBoard.length; i++) {
    authorArr[i] = await doUser.get.byId(unifiedBoard[i].authorId);
  }
  return { board: unifiedBoard, authorArr };
};
