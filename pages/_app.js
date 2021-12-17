import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Context from '../components/Contexts/context';
import TransitionLayout from '../components/Utils/transitionLayout';
import AppAnimation from '../components/Utils/appAnimation';
import styled from 'styled-components';
import '../styles/Font.css';
import Auth from '../components/Utils/auth';
import ProgressContainer from '../components/Utils/myProgressContainer';
import Modal from '../components/Utils/modal';

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
          <Modal />
        </Auth>
      </Context>
    </FontStyle>
  );
}
