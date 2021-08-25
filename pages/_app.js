import CenterAlign from '../styles/centerAlign';
import Header from '../fixed/Header';
import Context from './_context';
import axios from 'axios';

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
  const free_res = await axios.get('http://localhost:3000/api/viewFree');
  const free_data = await free_res.data;
  const photo_res = await axios.get('http://localhost:3000/api/viewPhoto');
  const photo_data = await photo_res.data;
  return { freeBoard: free_data, photoBoard: photo_data };
};
