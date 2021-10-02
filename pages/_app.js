import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Context from '../src/context';

export default function MyApp({ Component, pageProps, freeBoard, photoBoard }) {
  return (
    <Context freeBoard={freeBoard} photoBoard={photoBoard}>
      <HeaderTemplate />
      <Component {...pageProps} />
    </Context>
  );
}
