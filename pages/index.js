import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../components/Contexts/context';
import { doPosting, doUser } from '../utils/doApi';
import HomeTemplate from '../components/Templates/HomeTemplate';
import Head from 'next/head';
import ModalAccountSettings from '../components/Organisms/ModalAcountSettings';

export default function Index({ freeBoard, photoBoard }) {
  const user = useReducerState().user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'index',
    });
  }, [dispatch]);

  const deleteAccount = async () => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await doUser.delete(user.userId);
      dispatch({ type: 'logout' });
      dispatch({ type: 'modal', title: '', content: '' });
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
      <HomeTemplate
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
