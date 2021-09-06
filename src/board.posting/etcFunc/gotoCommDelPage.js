import { unmountAnimation } from '../../common/animationController';

export default function gotoCommDelPage(
  nowPostingEleObj,
  comment_id,
  dispatch,
) {
  if (confirm('정말로 삭제하시겠습니까')) {
    unmountAnimation(
      0,
      dispatch,
      `/board/update_comment/commDeleting?board_type=${nowPostingEleObj.board_type}&post_id=${nowPostingEleObj.id}&comment_id=${comment_id}`,
    );
  }
}
