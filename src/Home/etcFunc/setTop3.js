export default function setTop3(board, bak, i = 0) {
  bak.current = [];
  if (board) {
    if (board.length >= 3) {
      for (i = 0; i < 3; i++) {
        bak.current = bak.current.concat(board[i]);
      }
    } else if (board.length < 3) {
      for (i = 0; i < board.length; i++) {
        bak.current = bak.current.concat(board[i]);
      }
    }
  }
  return bak.current;
}
