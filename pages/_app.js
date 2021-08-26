import CenterAlign from '../styles/centerAlign';
import Header from '../fixed/Header';
import Context from './_context';
import instance from './api/api';
import getData from '../fixed/getData';

export default function MyApp({ Component, pageProps, freeBoard, photoBoard }) {
  return (
    <Context freeBoard={freeBoard} photoBoard={photoBoard}>
      <CenterAlign>
        <Header />
        <Component {...pageProps} />
      </CenterAlign>
    </Context>
  );
}

MyApp.getInitialProps = async () => {
  return await getData();
};
