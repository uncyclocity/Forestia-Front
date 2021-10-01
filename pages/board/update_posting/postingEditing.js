import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import setNowPostingEle from '../../../src/common/setNowPostingEle';
import PostingEditingTemplate from '../../../components/Templates/PostingEditingTemplate';

export default function PostingEditing() {
  const dispatch = useDispatch();
  const { board_type, id } = useReducerState().nowPostingEleObj;

  useEffect(() => {
    mountAnimation(dispatch, 'editing');
    return () => {
      setNowPostingEle(dispatch, {});
    };
  }, [dispatch]);

  return <PostingEditingTemplate board_type={board_type} id={id} />;
}
