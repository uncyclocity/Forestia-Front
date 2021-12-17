import Context from '../Contexts/context';
import HeaderTemplate from '../Templates/HeaderTemplate';
import AppAnimation from './appAnimation';
import Auth from './auth';
import Modal from './modal';
import ProgressContainer from './myProgressContainer';
import TransitionLayout from './transitionLayout';

export default function Import2AppComponent({ children }) {
  return (
    <>
      <ProgressContainer />
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
