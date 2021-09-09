import { posting } from '../../../doApi/doApi';

export default async function letsDeletePostingAndImage(
  nowPostingEleObj,
  dispatch,
) {
  const { board_type, id, imagesUrl } = nowPostingEleObj;
  await posting.doDeletePosting(board_type, id, dispatch);
  await posting.doDeleteImage(board_type, imagesUrl, dispatch);
}
