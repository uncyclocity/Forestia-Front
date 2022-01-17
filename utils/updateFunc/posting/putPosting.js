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
      await doPosting.put(boardType, id, editEle.title, editEle.content);
      dispatch({
        type: 'postcnt_switcher',
        sw: false,
      });
    } else {
      alert('제목 및 내용을 입력하세요');
    }
  }
};
