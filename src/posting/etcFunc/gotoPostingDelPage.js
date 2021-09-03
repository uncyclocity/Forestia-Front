export default function gotoPostingDelPage(nowPostingEleObj, comment_id) {
  if (confirm('정말로 삭제하시겠습니까')) {
    unmountAnimation(
      0,
      dispatch,
      `/board/update_comment/commDeleting?boardType=${nowPostingEleObj.board_type}&post_id=${nowPostingEleObj.id}&comment_id=${comment_id}`,
    );
  }
}
