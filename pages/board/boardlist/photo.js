import { useEffect } from 'react';
import { useDispatch } from '../../../components/Contexts/context';
import { doPosting, doUser } from '../../../utils/doApi';
import PhotoListTemplate from '../../../components/Templates/PhotoListTemplate';
import Head from 'next/head';

export default function Photo({ photoBoard, page, photoLen, authorArr }) {
  const ogImage = '/assets/embed.png';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'photo',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>짤게</title>
        <meta property="og:title" content="포레스티아 짤게" />
        <meta
          property="og:description"
          content="사진이 주 목적인 글을 올려주세요 :)"
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      <PhotoListTemplate
        photoLen={photoLen}
        page={page}
        nowList={photoBoard}
        authorArr={authorArr}
      />
    </>
  );
}

Photo.getInitialProps = async (ctx) => {
  const page = ctx.query.page || 1;
  const photoBoard = await doPosting.get.list(page, 'photo');
  const photoLen = await doPosting.get.length('photo');
  const authorArr = [];
  for (let i = 0; i < photoBoard.length; i++) {
    authorArr[i] = await doUser.get.byId(photoBoard[i].authorId);
  }
  return { photoBoard, page, photoLen, authorArr };
};
