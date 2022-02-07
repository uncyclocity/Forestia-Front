import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../components/Contexts/context';
import { doPosting } from '../utils/doApi';
import IndexTemplate from '../components/Templates/IndexTemplate';
import Head from 'next/head';
import ModalAccountSettings from '../components/Organisms/ModalAcountSettings';
import { deleteUser } from '../utils/updateFunc/user/deleteUser';

export default function Index({ freeBoard, photoBoard }) {
  const state = useReducerState();
  const user = state.user;
  const postCnt = state.postCnt;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'index',
    });
  }, [dispatch]);

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
    const title = '계정 설정';
    const content = <ModalAccountSettings deleteAccount={deleteAccount} />;
    dispatch({ type: 'modal', active: true, title, content });
  };

  return (
    <>
      <Head>
        <title>It&#39;s Forestia</title>
        <meta property="og:title" content="It's Forestia" />
        <meta
          property="og:description"
          content="풀내음나는 자취 커뮤니티 포레스티아입니다."
        />
      </Head>
      <IndexTemplate
        freeBoard={freeBoard}
        photoBoard={photoBoard}
        accountSettings={accountSettings}
      />
    </>
  );
}

Index.getInitialProps = async () => {
  const freeBoard = await doPosting.get.top3('free');
  const photoBoard = await doPosting.get.top3('photo');
  return { freeBoard, photoBoard };
};
