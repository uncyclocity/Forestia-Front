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

MyApp.getInitialProps = () => {
  return true;
};
