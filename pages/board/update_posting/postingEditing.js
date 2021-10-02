import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/context';
import PostingEditingTemplate from '../../../components/Templates/PostingEditingTemplate';

export default function PostingEditing() {
  const dispatch = useDispatch();
  const { board_type, id } = useReducerState().nowPostingEleObj;

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'editing',
    });
    return () => {
      dispatch({ type: 'editpost_data', nowPostingEleObj: {} });
    };
  }, [dispatch]);

  return <PostingEditingTemplate board_type={board_type} id={id} />;
}
