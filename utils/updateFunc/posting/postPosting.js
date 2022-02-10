import { doImage, doPosting } from '../../doApi';

export const postPosting = async ({
  selBoard,
  title,
  content,
  imagesArr,
  dispatch,
  postCnt,
}) => {
  if (!postCnt) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    try {
      const boardLen = await doPosting.get.length(selBoard);
      const formData = new FormData();
      let id = '0';

      if (boardLen > 0) {
        const maxId = await doPosting.get.latestId(selBoard);
        id = (parseInt(maxId) + 1).toString();
      }

      for (let image of imagesArr) {
        formData.append('images', image);
      }

      const res = await doImage.post(formData, selBoard);
      await doPosting.post({
        boardType: selBoard,
        id,
        title,
        content,
        pathArr: res,
      });
    } catch (e) {
      console.error(e);
    }

    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  }
};
