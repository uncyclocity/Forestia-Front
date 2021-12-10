import { useDispatch } from '../../src/context';
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
        <title>404 Error</title>
        <meta name="description" content="404 에러 페이지입니다." />
      </Head>
      <Error404Template />
    </>
  );
}
