import Header from '../src/header/header';
import Context from '../src/common/context';
import instance from '../src/common/instance';

export default function MyApp({ Component, pageProps, freeBoard, photoBoard }) {
  return (
    <Context freeBoard={freeBoard} photoBoard={photoBoard}>
      <Header />
      <Component {...pageProps} />
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
