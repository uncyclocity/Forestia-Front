import { posting } from '../../doApi/doApi';

export default function letsDoUploadPosting(
  selBoard,
  state,
  title,
  content,
  dispatch,
) {
  const selBoardArr = state[selBoard + 'Board'];
  const selBoardLen = selBoardArr.length;
  const id =
    selBoardLen > 0 ? parseInt(selBoardArr[selBoardLen - 1].id) + 1 : 0;

  posting.doCreatePosting(selBoard, id, title, content, dispatch);
}
