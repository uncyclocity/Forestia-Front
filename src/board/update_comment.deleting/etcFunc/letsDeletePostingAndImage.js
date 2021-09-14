import { unmountAnimation } from '../../../common/animationController';
import { postPosting } from '../../../doApi/doApi';

export default async function letsDeletePostingAndImage(
  nowPostingEleObj,
  dispatch,
) {
  const { board_type, id, imagesUrl } = nowPostingEleObj;
  await postPosting.doDeletePosting(board_type, id, dispatch);
  postPosting.doDeleteImage(board_type, imagesUrl, dispatch);
  unmountAnimation(0, dispatch, `/board/board_list/${board_type}?page=1`);
}
