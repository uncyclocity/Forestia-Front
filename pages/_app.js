import '../styles/Font.css';
import Import2AppComponent from '../components/Utils/import2AppComponent';

export default function MyApp({ Component, pageProps }) {
  return (
    <Import2AppComponent>
      <Component {...pageProps} />
    </Import2AppComponent>
  );
}
