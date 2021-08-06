import CenterAlign from "../styles/centerAlign";
import Footer from "../fixed/footer";
import Context from "./_context";

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <CenterAlign>
        <Footer />
        <Component {...pageProps} />
      </CenterAlign>
    </Context>
  );
}

MyApp.getInitialProps = () => {
  return true;
};
