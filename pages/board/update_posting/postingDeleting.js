import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import setNowPostingEle from '../../../src/common/setNowPostingEle';
import DeletingTemplate from '../../../components/Templates/DeletingTemplate';
import { unmountAnimation } from '../../../src/common/animationController';
import postCntSwitcher from '../../../src/common/postCntSwitcher';
import { postPosting } from '../../../src/doApi/doApi';

const letsDeletePostingAndImage = async (nowPostingEleObj, dispatch) => {
  const { board_type, id, imagesUrl } = nowPostingEleObj;

  postCntSwitcher(dispatch, true);
  await postPosting.doPostDelete(board_type, id);
  imagesUrl.length > 0 && (await postPosting.doPostDeleteImage(imagesUrl));
  unmountAnimation(0, dispatch, `/board/board_list/${board_type}?page=1`);
  postCntSwitcher(dispatch, false);
};

export default function PostingDeleting() {
  const dispatch = useDispatch();
  const nowPostingEleObj = useReducerState().nowPostingEleObj;

  useEffect(() => {
    mountAnimation(dispatch, 'deleting');
    letsDeletePostingAndImage(nowPostingEleObj, dispatch);
    return () => {
      setNowPostingEle(dispatch, {});
    };
  }, [dispatch, nowPostingEleObj]);

  return <DeletingTemplate />;
}
