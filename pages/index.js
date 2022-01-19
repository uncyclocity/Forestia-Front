import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../components/Contexts/context';
import { doPosting, doUser } from '../utils/doApi';
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
        dispatch({ type: 'modal', title: '', content: '' });
      }
    }
  };

  const accountSettings = () => {
    const title = '계정 설정';
    const content = <ModalAccountSettings deleteAccount={deleteAccount} />;
    dispatch({
      type: 'modal',
      title,
      content,
    });
  };

  return (
    <>
      <Head>
        <title>It&#39;s Forestia</title>
        <meta name="description" content="인덱스 페이지입니다." />
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
