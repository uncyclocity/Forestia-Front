import '../styles/Font.css';
import Import2AppComponent from '../components/Utils/import2AppComponent';
import Context from '../components/Contexts/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Import2AppComponent>
        <Component {...pageProps} />
      </Import2AppComponent>
    </Context>
  );
}
