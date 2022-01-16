import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch } from '../../../components/Contexts/context';
import DeleteTemplate from '../../../components/Templates/DeleteTemplate';
import { doComment } from '../../../utils/doApi';
import Head from 'next/head';

const letsDeleteComm = async (
  dispatch,
  { boardtype: boardType, postid: postId, commentid: commentId },
) => {
  if (boardType || postId || commentId) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });
    await doComment.delete(boardType, postId, commentId);
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
        <meta name="description" content="댓글 삭제중 페이지입니다." />
      </Head>
      <DeleteTemplate />
    </>
  );
}