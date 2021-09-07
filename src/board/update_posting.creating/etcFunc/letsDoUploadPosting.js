import { posting } from '../../../doApi/doApi';

export default function letsDoUploadPosting(
  selBoard,
  state,
  title,
  content,
  images,
  dispatch,
) {
  const selBoardArr = state[selBoard + 'Board'];
  const selBoardLen = selBoardArr.length;
  const id =
    selBoardLen > 0 ? parseInt(selBoardArr[selBoardLen - 1].id) + 1 : 0;

  const formData = new FormData();
  formData.append('images', images.current.files[0]);

  posting.doUploadImage(formData, selBoard, id, dispatch);
  posting.doCreatePosting(selBoard, id, title, content, dispatch);
}
