import CenterAlign from '../styles/centerAlign';
import Header from '../fixed/Header';
import Context from './_context';

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <CenterAlign>
        <Header />
        <Component {...pageProps} />
      </CenterAlign>
    </Context>
  );
}

MyApp.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/viewPost');
  const data = await res.json();
  console.log(data);
  return true;
};
