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
  const { userId } = useReducerState().user;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'delete',
    });
    if (boardType && id && imagesUrl && userId === authorId) {
      deletePosting({ boardType, id, imagesUrl, dispatch });
    } else {
      Router.push('/404');
    }
    return () => {
      dispatch({ type: 'editpost_data', nowPostingEleObj: {} });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>게시글 삭제 중</title>
        <meta name="description" content="게시글 삭제중 페이지입니다." />
      </Head>
      <DeleteTemplate />
    </>
  );
}
