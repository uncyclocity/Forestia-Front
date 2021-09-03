const getBoardArr = (state, board_type) => {
  switch (board_type) {
    case 'free':
      return state.freeBoard;
    case 'photo':
      return state.photoBoard;
    default:
      console.error('posting 페이지의 board_type 쿼리를 확인하세요');
  }
};

const getPostingIdx = (boardArr, posting_id) => {
  return boardArr.findIndex((posting) => posting.id === posting_id);
};

export default function getPostingEleState(state, board_type, posting_id) {
  const boardArr = getBoardArr(state, board_type);
  const postingIdx = getPostingIdx(boardArr, posting_id);
  const foundPosting = boardArr[postingIdx];
  const boardTypeAdded = { ...foundPosting, board_type };

  return boardTypeAdded;
}
