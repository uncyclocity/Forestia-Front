import CenterAlign from '../styles/centerAlign';
import Header from '../fixed/Header';
import Context from './_context';

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
  const free_res = await fetch('http://localhost:3000/api/viewFree');
  const free_data = await free_res.json();
  const photo_res = await fetch('http://localhost:3000/api/viewPhoto');
  const photo_data = await photo_res.json();
  return { freeBoard: free_data, photoBoard: photo_data };
};
