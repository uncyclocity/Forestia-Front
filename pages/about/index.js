import { useEffect } from 'react';
import { useDispatch } from '../../components/Contexts/context';
import AboutTemplate from '../../components/Templates/AboutTemplate';
import Head from 'next/head';

export default function About() {
  const ogImage = '/assets/embed.png';
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
        <title>About Forestia</title>
        <meta property="og:title" content="About Forestia" />
        <meta property="og:description" content="포레스티아를 소개합니다." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      <AboutTemplate />
    </>
  );
}
