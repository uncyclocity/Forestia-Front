import { unmountAnimation } from '../../../common/animationController';
import postCntSwitcher from '../../../common/postCntSwitcher';
import { postPosting } from '../../../doApi/doApi';

export default async function letsDeletePostingAndImage(
  nowPostingEleObj,
  dispatch,
) {
  const { board_type, id, imagesUrl } = nowPostingEleObj;

  postCntSwitcher(dispatch, true);
  await postPosting.doPostDelete(board_type, id);
  imagesUrl.length > 0 && (await postPosting.doPostDeleteImage(imagesUrl));
  unmountAnimation(0, dispatch, `/board/board_list/${board_type}?page=1`);
  postCntSwitcher(dispatch, false);
}
