import { useEffect } from 'react';
import { useDispatch } from '../../../components/Contexts/context';
import { doPosting, doUser } from '../../../utils/doApi';
import FreeListTemplate from '../../../components/Templates/FreeListTemplate';
import Head from 'next/head';

export default function Free({ freeBoard, page, freeLen, authorArr }) {
  const ogImage = '/assets/embed.png';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'free',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>자게</title>
        <meta property="og:title" content="포레스티아 자게" />
        <meta property="og:description" content="자유롭게 글을 올려주세요 :)" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      <FreeListTemplate
        freeLen={freeLen}
        page={page}
        nowList={freeBoard}
        authorArr={authorArr}
      />
    </>
  );
}

Free.getInitialProps = async (ctx) => {
  const page = ctx.query.page || 1;
  const freeBoard = await doPosting.get.list(page, 'free');
  const freeLen = await doPosting.get.length('free');
  const authorArr = [];
  for (let i = 0; i < freeBoard.length; i++) {
    authorArr[i] = await doUser.get.byId(freeBoard[i].authorId);
  }
  return { freeBoard, page, freeLen, authorArr };
};
