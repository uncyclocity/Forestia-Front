export default function getEditPostingObj(boardType, nowPostingEleObj) {
  const editPostingObj = {
    boardType,
    id: nowPostingEleObj.id,
    title: nowPostingEleObj.title,
    content: nowPostingEleObj.content,
  };
  return editPostingObj;
}
