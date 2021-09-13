import Header from '../src/header/header';
import Context from '../src/common/context';

export default function MyApp({ Component, pageProps, freeBoard, photoBoard }) {
  return (
    <Context freeBoard={freeBoard} photoBoard={photoBoard}>
      <Header />
      <Component {...pageProps} />
    </Context>
  );
}
