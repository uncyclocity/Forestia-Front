import Context from '../Contexts/context';
import HeaderTemplate from '../Templates/HeaderTemplate';
import AppAnimation from './appAnimation';
import Auth from './auth';
import Modal from './modal';
import MyProgressContainer from './myProgressContainer';
import TransitionLayout from './transitionLayout';

export default function Import2AppComponent({ children }) {
  return (
    <>
      <MyProgressContainer />
      <Context>
        <Auth>
          <AppAnimation>
            <HeaderTemplate />
            <TransitionLayout>{children}</TransitionLayout>
          </AppAnimation>
          <Modal />
        </Auth>
      </Context>
    </>
  );
}
