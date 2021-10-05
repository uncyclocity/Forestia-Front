import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/context';
import PostingEditingTemplate from '../../../components/Templates/PostingEditingTemplate';
import Head from 'next/head';
import Router from 'next/router';

export default function PostingEditing() {
  const dispatch = useDispatch();
  const { board_type, id } = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'editing',
    });
    if (!board_type || !id) {
      Router.push('/404');
    }

    return () => {
      dispatch({ type: 'editpost_data', nowPostingEleObj: {} });
    };
  }, [board_type, dispatch, id]);

  return (
    <>
      <Head>
        <title>게시글 수정</title>
      </Head>
      <PostingEditingTemplate board_type={board_type} id={id} />
    </>
  );
}
