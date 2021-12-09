import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch } from '../../../src/context';
import DeleteTemplate from '../../../components/Templates/DeleteTemplate';
import { doComment } from '../../../src/doApi';
import Head from 'next/head';

const letsDeleteComm = async (
  dispatch,
  { board_type, post_id, comment_id },
) => {
  if (board_type || post_id || comment_id) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });
    await doComment.delete(board_type, post_id, comment_id);
    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  } else {
    Router.push('/404');
  }
};

export default function Delete() {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(router);
  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'delete',
    });

    letsDeleteComm(dispatch, router.query);
  }, [dispatch, router.query]);

  return (
    <>
      <Head>
        <title>댓글 삭제 중</title>
      </Head>
      <DeleteTemplate />
    </>
  );
}
