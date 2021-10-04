import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Context from '../src/context';
import TransitionLayout from '../src/TransitionLayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <HeaderTemplate />
      <TransitionLayout>
        <Component {...pageProps} />
      </TransitionLayout>
    </Context>
  );
}
