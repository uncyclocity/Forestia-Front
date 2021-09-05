import moment from 'moment';
import instance from '../common/instance';
import getBoardData from '../common/getBoardData';

const getNewCommId = (nowPostingEleObj) => {
  const commArr = nowPostingEleObj.comments;
  const commArrLen = commArr.length;
  const commId = commArrLen > 0 ? parseInt(commArr[commArrLen - 1].id) + 1 : 0;
  return commId;
};

export const comm = {
  doUploadComment: (
    nowPostingEleObj,
    board_type,
    post_id,
    contentRef,
    userName,
    dispatch,
  ) => {
    const apiUrl = '/api/post_comment/uploadComment';
    const comment_id = getNewCommId(nowPostingEleObj);
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
    instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type,
        post_id,
        comment_id,
        author: userName,
        date: nowDate,
        content: contentRef.current.value,
      },
    }).then(async () => {
      contentRef.current.value = '';
      await getBoardData(dispatch);
    });
  },
  doEditComment: (
    board_type,
    post_id,
    editCommObj,
    setEditCommObj,
    dispatch,
  ) => {
    const apiUrl = '/api/post_comment/editComment';
    instance({
      method: 'POST',
      url: apiUrl,
      data: {
        boardType: board_type,
        post_id,
        comment_id: editCommObj.id,
        content: editCommObj.content,
      },
    }).then(async () => {
      setEditCommObj(false);
      await getBoardData(dispatch);
    });
  },
};

export const posting = {
  doUpdateUpDown: (data, dispatch) => {
    const apiUrl = '/api/post_posting/editUD';
    instance({
      method: 'POST',
      url: apiUrl,
      data,
    }).then(async () => {
      await getBoardData(dispatch);
    });
  },
};
