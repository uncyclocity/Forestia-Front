import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch } from '../../../components/Contexts/context';
import DeleteTemplate from '../../../components/Templates/DeleteTemplate';
import Head from 'next/head';
import { deleteReply } from '../../../utils/updateFunc/reply/deleteReply';

export default function Delete() {
  const {
    boardtype: boardType,
    postid: postId,
    commentid: commentId,
    authorid: authorId,
    replyid: replyId,
  } = useRouter().query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'delete',
    });
    if (boardType && postId && commentId && authorId && replyId) {
      deleteReply({
        boardType,
        postId,
        commentId,
        dispatch,
        authorId,
        replyId,
      });
    } else {
      Router.push('/404');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>대댓글 삭제 중</title>
        <meta name="description" content="대댓글 삭제중 페이지입니다." />
      </Head>
      <DeleteTemplate />
    </>
  );
}
