import { useEffect } from 'react';
import { useDispatch } from '../../../src/context';
import PostingCreatingTemplate from '../../../components/Templates/PostingCreatingTemplate';

export default function PostingCreating() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'creating',
    });
    dispatch({ type: 'editpost_data', nowPostingEleObj: {} });
  }, [dispatch]);

  return <PostingCreatingTemplate />;
}
