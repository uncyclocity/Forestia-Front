export default function gotoPostingDelPage(comment_id) {
  if (confirm('정말로 삭제하시겠습니까')) {
    unmountAnimation(
      0,
      dispatch,
      `/board/update_comment/commDeleting?boardType=${board_type}&post_id=${post_id}&comment_id=${comment_id}`,
    );
  }
}
