import { useDispatch } from '../../components/Contexts/context';
import { useEffect } from 'react';
import Error404Template from '../../components/Templates/Error404Template';
import Head from 'next/head';

export default function NotFoundPage() {
  const ogImage = '/assets/embed.png';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: '404',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta property="og:title" content="404 Not Found" />
        <meta property="og:description" content="존재하지 않는 페이지입니다." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      <Error404Template />
    </>
  );
}
