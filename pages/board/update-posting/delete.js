import { useEffect } from 'react';
import {
  useDispatch,
  useReducerState,
} from '../../../components/Contexts/context';
import DeleteTemplate from '../../../components/Templates/DeleteTemplate';
import Router from 'next/router';
import Head from 'next/head';
import { deletePosting } from '../../../utils/updateFunc/posting/deletePosting';

export default function Delete() {
  const dispatch = useDispatch();
  const { boardType, id, imagesUrl, authorId } =
    useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'delete',
    });
    if (boardType && id && imagesUrl && authorId) {
      deletePosting({ boardType, id, imagesUrl, dispatch, authorId });
    } else {
      Router.push('/404');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="게시글 삭제 중" />
      </Head>
      <DeleteTemplate />
    </>
  );
}
