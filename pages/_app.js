import CenterAlign from '../styles/centerAlign';
import Header from '../fixed/Header';
import Context from './_context';
import instance from './api/api';

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
  const free_res = await instance.get('/api/viewFree');
  const freeBoard = await free_res.data;
  const photo_res = await instance.get('/api/viewPhoto');
  const photoBoard = await photo_res.data;
  return { freeBoard, photoBoard };
};
