import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch } from '../../../components/Contexts/context';
import DeleteTemplate from '../../../components/Templates/DeleteTemplate';
import Head from 'next/head';
import { deleteComment } from '../../../utils/updateFunc/comment/deleteComment';

export default function Delete() {
  const {
    boardtype: boardType,
    postid: postId,
    commentid: commentId,
    authorid: authorId,
  } = useRouter().query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'delete',
    });
    if (boardType && postId && commentId && authorId) {
      deleteComment({ boardType, postId, commentId, dispatch, authorId });
    } else {
      Router.push('/404');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>댓글 삭제 중</title>
        <meta property="og:title" content="댓글 삭제 중" />
      </Head>
      <DeleteTemplate />
    </>
  );
}
