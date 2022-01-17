import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import {
  useDispatch,
  useReducerState,
} from '../../../components/Contexts/context';
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
  const { userId } = useReducerState().user;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'delete',
    });
    if (boardType && postId && commentId && authorId === userId) {
      deleteComment({ boardType, postId, commentId, dispatch });
    } else {
      Router.push('/404');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
