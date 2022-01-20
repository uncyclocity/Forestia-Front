import { doPosting } from '../../doApi';

export const putPosting = async ({
  postCnt,
  dispatch,
  editEle,
  boardType,
  id,
}) => {
  if (!postCnt) {
    if (editEle.title && editEle.content) {
      dispatch({
        type: 'postcnt_switcher',
        sw: true,
      });

      try {
        await doPosting.put(boardType, id, editEle.title, editEle.content);
      } catch (e) {
        console.error(e);
      }

      dispatch({
        type: 'postcnt_switcher',
        sw: false,
      });
    } else {
      alert('제목 및 내용을 입력하세요');
    }
  }
};
