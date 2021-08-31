import CenterAlign from '../styles/centerAlign';
import Header from '../src/header';
import Context from '../src/_context';
import instance from '../src/instance';

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
  const free_res = await instance.get('/api/get_posting/viewFree');
  const freeBoard = await free_res.data;
  const photo_res = await instance.get('/api/get_posting/viewPhoto');
  const photoBoard = await photo_res.data;
  return { freeBoard, photoBoard };
};
