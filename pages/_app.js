import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Context from '../src/common/context';
import { AppAnimation } from '../src/boxEle/boxAnimation';

export default function MyApp({ Component, pageProps, freeBoard, photoBoard }) {
  return (
    <AppAnimation>
      <Context freeBoard={freeBoard} photoBoard={photoBoard}>
        <HeaderTemplate />
        <Component {...pageProps} />
      </Context>
    </AppAnimation>
  );
}
