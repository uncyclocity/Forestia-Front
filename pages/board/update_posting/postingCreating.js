import { useEffect } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import setNowPostingEle from '../../../src/common/setNowPostingEle';
import PostingCreatingTemplate from '../../../components/Templates/PostingCreatingTemplate';

export default function PostingCreating() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'creating');
    setNowPostingEle(dispatch, {});
  }, [dispatch]);

  return <PostingCreatingTemplate />;
}
