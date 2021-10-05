import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from '../../../src/context';
import DeletingTemplate from '../../../components/Templates/DeletingTemplate';
import { postComm } from '../../../src/doApi';
import Head from 'next/head';

const letsDeleteComm = async (
  dispatch,
  { board_type, post_id, comment_id },
) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });
  await postComm.doPostDelete(board_type, post_id, comment_id);
  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};

export default function CommDeleting() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'commDeleting',
    });
    letsDeleteComm(dispatch, router.query);
  }, [dispatch, router.query]);

  return (
    <>
      <Head>
        <title>댓글 삭제 중</title>
      </Head>
      <DeletingTemplate />
    </>
  );
}
