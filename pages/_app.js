import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Context from '../src/context';
import TransitionLayout from '../src/TransitionLayout';
import AppAnimation from '../src/AppAnimation';
import styled from 'styled-components';
import '../styles/Font.css';
import Auth from '../src/auth';
import ProgressContainer from '../src/MyProgressContainer';

const FontStyle = styled.div`
  font-family: 'Spoqa Han Sans Neo';
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <FontStyle>
      <ProgressContainer />
      <Context>
        <Auth>
          <AppAnimation>
            <HeaderTemplate />
            <TransitionLayout>
              <Component {...pageProps} />
            </TransitionLayout>
          </AppAnimation>
        </Auth>
      </Context>
    </FontStyle>
  );
}
