import { useEffect } from 'react';
import { useDispatch } from '../../src/context';
import AboutTemplate from '../../components/Templates/AboutTemplate';
import Head from 'next/head';

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'about',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <AboutTemplate />
    </>
  );
}
