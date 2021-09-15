import postCntSwitcher from '../../../common/postCntSwitcher';
import { postComm } from '../../../doApi/doApi';

export default async function letsDeleteComm(
  dispatch,
  { board_type, post_id, comment_id },
) {
  postCntSwitcher(dispatch, true);
  await postComm.doPostDelete(board_type, post_id, comment_id, dispatch);
  postCntSwitcher(dispatch, false);
}
