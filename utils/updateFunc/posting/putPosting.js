import { doPosting } from '../../doApi';

export const putPosting = async ({
  postCnt,
  dispatch,
  editEle,
  boardType,
  id,
  authorId,
}) => {
  if (!postCnt) {
    if (editEle.title && editEle.content) {
      dispatch({
        type: 'postcnt_switcher',
        sw: true,
      });

      try {
        await doPosting.put({
          boardType,
          id,
          title: editEle.title,
          content: editEle.content,
          authorId,
        });
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
