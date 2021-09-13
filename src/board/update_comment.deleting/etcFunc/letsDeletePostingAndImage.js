import { unmountAnimation } from '../../../common/animationController';
import { posting } from '../../../doApi/doApi';

export default async function letsDeletePostingAndImage(
  nowPostingEleObj,
  dispatch,
) {
  const { board_type, id, imagesUrl } = nowPostingEleObj;
  await posting.doDeletePosting(board_type, id, dispatch);
  posting.doDeleteImage(board_type, imagesUrl, dispatch);
  unmountAnimation(0, dispatch, `/board/board_list/${board_type}?page=1`);
}
