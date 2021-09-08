import { posting } from '../../../doApi/doApi';

export default async function letsDoUploadPosting(
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
  for (var i = 0; i < images.current.files.length; i++) {
    formData.append('images', images.current.files[i]);
  }

  const res = await posting.doUploadImage(formData, selBoard, dispatch);
  console.log(res);
  posting.doCreatePosting(selBoard, id, title, content, res, dispatch);
}
