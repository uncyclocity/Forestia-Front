import { doImage, doPosting } from '../../doApi';

export const postPosting = async ({
  selBoard,
  title,
  content,
  imagesArr,
  dispatch,
  userObj,
  postCnt,
}) => {
  if (!postCnt) {
    const boardLen = await doPosting.get.length(selBoard);
    const formData = new FormData();
    let id = '0';

    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    if (boardLen > 0) {
      const maxId = await doPosting.get.latestId(selBoard);
      id = parseInt(maxId) + 1;
    }

    for (let image of imagesArr) {
      formData.append('images', image);
    }

    const res = await doImage.post(formData, selBoard);
    await doPosting.post(selBoard, id, title, content, res, userObj);
  }
};
