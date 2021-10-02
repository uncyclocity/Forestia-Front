import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Context from '../src/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <HeaderTemplate />
      <Component {...pageProps} />
    </Context>
  );
}
