import instance from '../../utils/instance';
import { deleteUser } from '../../utils/updateFunc/user/deleteUser';
import { useDispatch, useReducerState } from '../Contexts/context';
import ModalAccountSettings from '../Organisms/ModalAcountSettings';
import HeaderTemplate from '../Templates/HeaderTemplate';
import AppAnimation from './appAnimation';
import Auth from './auth';
import Modal from './modal';
import MyProgressContainer from './myProgressContainer';
import TransitionLayout from './transitionLayout';

export default function Import2AppComponent({ children }) {
  const state = useReducerState();
  const dispatch = useDispatch();
  const user = state.user;
  const postCnt = state.postCnt;
  const nowPage = state.nowPage;

  const logOutAccount = () => {
    if (confirm('로그아웃하시겠습니까?')) {
      instance.defaults.headers.common['Authorization'] = '';
      document.cookie =
        'refreshToken=; expires=Thu, 01 Jan 1999 00:00:10 GMT; domain=forestia.me; path=/;';
      dispatch({ type: 'logout' });
      dispatch({ type: 'modal_close' });
      setTimeout(
        () =>
          dispatch({ type: 'modal', active: false, title: '', content: '' }),
        250,
      );
    }
  };

  const deleteAccount = async () => {
    if (!postCnt) {
      if (confirm('정말로 삭제하시겠습니까?')) {
        await deleteUser({ dispatch, userId: user.userId });
        dispatch({ type: 'logout' });
        dispatch({ type: 'modal_close' });
        setTimeout(
          () =>
            dispatch({ type: 'modal', active: false, title: '', content: '' }),
          250,
        );
      }
    }
  };

  const accountSettings = () => {
    if (nowPage !== 'signup') {
      const title = '계정 관리';
      const content = (
        <ModalAccountSettings
          logOutAccount={logOutAccount}
          deleteAccount={deleteAccount}
          user={user}
        />
      );
      dispatch({ type: 'modal', active: true, title, content });
    }
  };

  return (
    <>
      <MyProgressContainer />
      <Auth>
        <AppAnimation>
          <HeaderTemplate accountSettings={accountSettings} />
          <TransitionLayout>{children}</TransitionLayout>
        </AppAnimation>
        <Modal />
      </Auth>
    </>
  );
}
