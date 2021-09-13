import instance from '../../../common/instance';
import { posting } from '../../../doApi/doApi';

export default async function letsDoUploadPosting(
  selBoard,
  state,
  title,
  content,
  images,
  dispatch,
) {
  const boardlen_res = await instance.get(
    `/api/get_posting/getPostingsLen?board_type=${selBoard}`,
  );
  const boardLen = boardlen_res.data;
  var id = 0;

  if (boardLen > 0) {
    const maxId_res = await instance.get(
      `/api/get_posting/getLatestPostingId?board_type=${selBoard}`,
    );
    const maxId = maxId_res.data;
    id = parseInt(maxId) + 1;
    console.log(maxId);
  }

  const formData = new FormData();
  for (var i = 0; i < images.current.files.length; i++) {
    formData.append('images', images.current.files[i]);
  }

  const res = await posting.doUploadImage(formData, selBoard, dispatch);
  posting.doCreatePosting(selBoard, id, title, content, res, dispatch);
}
