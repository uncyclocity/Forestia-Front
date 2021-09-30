import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import DeletingTemplate from '../../../components/Templates/DeletingTemplate';
import postCntSwitcher from '../../../src/common/postCntSwitcher';
import { postComm } from '../../../src/doApi/doApi';

const letsDeleteComm = async (
  dispatch,
  { board_type, post_id, comment_id },
) => {
  postCntSwitcher(dispatch, true);
  await postComm.doPostDelete(board_type, post_id, comment_id, dispatch);
  postCntSwitcher(dispatch, false);
};

export default function CommDeleting() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'commDeleting');
    letsDeleteComm(dispatch, router.query);
  }, [dispatch, router.query]);

  return <DeletingTemplate />;
}
