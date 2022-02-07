import Context from '../Contexts/context';
import HeaderTemplate from '../Templates/HeaderTemplate';
import AppAnimation from './appAnimation';
import Auth from './auth';
import Modal from './modal';
import MyProgressContainer from './myProgressContainer';
import TransitionLayout from './transitionLayout';
import Head from 'next/head';

export default function Import2AppComponent({ children }) {
  const ogImage = '/assets/embed.png';

  return (
    <>
      <Head>
        <meta property="og:image" content={ogImage} />
      </Head>
      <MyProgressContainer />
      <Context>
        <Auth>
          <AppAnimation>
            <HeaderTemplate />
            <TransitionLayout>{children}</TransitionLayout>
          </AppAnimation>
          <Modal />
        </Auth>
      </Context>
    </>
  );
}
