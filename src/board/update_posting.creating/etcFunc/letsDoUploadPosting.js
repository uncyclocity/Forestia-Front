import postCntSwitcher from '../../../common/postCntSwitcher';
import { getPosting, postPosting } from '../../../doApi/doApi';

export default async function letsDoUploadPosting(
  selBoard,
  title,
  content,
  imagesArr,
  dispatch,
) {
  postCntSwitcher(dispatch, true);
  const boardLen = await getPosting.doGetLength(selBoard);

  var id = '0';

  const formData = new FormData();

  if (boardLen > 0) {
    const maxId = await getPosting.doGetLatestId(selBoard);
    id = parseInt(maxId) + 1;
  }

  for (var i = 0; i < imagesArr.length; i++) {
    formData.append('images', imagesArr[i]);
  }

  const res = await postPosting.doPostCreateImage(formData, selBoard, dispatch);
  await postPosting.doPostCreate(selBoard, id, title, content, res, dispatch);
  postCntSwitcher(dispatch, false);
}
