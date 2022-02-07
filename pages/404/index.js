import { useDispatch } from '../../components/Contexts/context';
import { useEffect } from 'react';
import Error404Template from '../../components/Templates/Error404Template';
import Head from 'next/head';

export default function NotFoundPage() {
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
        <meta property="og:title" content="404 Not Found" />
        <meta property="og:description" content="존재하지 않는 페이지입니다." />
      </Head>
      <Error404Template />
    </>
  );
}
