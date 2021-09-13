import moment from 'moment';
import instance from '../common/instance';
import { unmountAnimation } from '../common/animationController';

const postCntSwitcher = (dispatch, sw) => {
  dispatch({
    type: 'postcnt_switcher',
    sw,
  });
};

const getNewCommId = (nowPostingEleObj) => {
  const commArr = nowPostingEleObj.comments;
  const commArrLen = commArr.length;
  const commId = commArrLen > 0 ? parseInt(commArr[commArrLen - 1].id) + 1 : 0;
  return commId;
};

export const comm = {
  doUploadComment: async (nowPostingEleObj, contentRef, userName, dispatch) => {
    postCntSwitcher(dispatch, true);
    const apiUrl = '/api/post_comment/uploadComment';
    const comment_id = getNewCommId(nowPostingEleObj);
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type: nowPostingEleObj.board_type,
        post_id: nowPostingEleObj.id,
        comment_id,
        author: userName,
        date: nowDate,
        content: contentRef.current.value,
      },
    }).then(async () => {
      contentRef.current.value = '';
      postCntSwitcher(dispatch, false);
    });
  },
  doEditComment: async (
    nowPostingEleObj,
    editCommObj,
    setEditCommObj,
    dispatch,
  ) => {
    postCntSwitcher(dispatch, true);
    const apiUrl = '/api/post_comment/editComment';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type: nowPostingEleObj.board_type,
        post_id: nowPostingEleObj.id,
        comment_id: editCommObj.id,
        content: editCommObj.content,
      },
    }).then(async () => {
      setEditCommObj(false);
      postCntSwitcher(dispatch, false);
    });
  },
  doDeleteComment: async (board_type, post_id, comment_id, dispatch) => {
    postCntSwitcher(dispatch, true);
    await instance({
      method: 'POST',
      url: '/api/post_comment/deleteComment',
      data: {
        board_type,
        post_id,
        comment_id,
      },
    }).then(async () => {
      postCntSwitcher(dispatch, false);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${post_id}`,
      );
    });
  },
};

export const posting = {
  doUpdateUpDown: async (data, dispatch) => {
    postCntSwitcher(dispatch, true);
    const apiUrl = '/api/post_posting/editUD';
    await instance({
      method: 'POST',
      url: apiUrl,
      data,
    }).then(async () => {
      postCntSwitcher(dispatch, false);
    });
  },
  doCreatePosting: async (
    board_type,
    id,
    title,
    content,
    pathArr,
    dispatch,
  ) => {
    const apiUrl = '/api/post_posting/uploadPost';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type,
        id,
        author: '백괴',
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        title: title.current.value,
        content: content.current.value,
        comments: [],
        imagesUrl: pathArr,
      },
    }).then(async () => {
      postCntSwitcher(dispatch, false);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${id}`,
      );
    });
  },
  doUploadImage: async (formData, board_type, dispatch) => {
    postCntSwitcher(dispatch, true);
    const apiUrl = `/api/post_posting/uploadImage?board_type=${board_type}`;
    var pathArr = [];
    await instance({
      method: 'POST',
      url: apiUrl,
      header: { 'content-type': 'multipart/form-data' },
      data: formData,
    }).then((resPathArr) => {
      pathArr = resPathArr;
    });
    return pathArr.data;
  },
  doDeletePosting: async (board_type, id, dispatch) => {
    postCntSwitcher(dispatch, true);
    const apiUrl = 'api/post_posting/deletePost';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type,
        id,
      },
    }).then(async () => {});
  },
  doDeleteImage: async (board_type, imagesUrl, dispatch) => {
    const apiUrl = 'api/post_posting/deleteImage';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: { imagesUrl },
    }).then(async () => {
      postCntSwitcher(dispatch, false);
      unmountAnimation(0, dispatch, `/board/board_list/${board_type}`);
    });
  },
  doEditPosting: async (board_type, id, newTitle, newContent, dispatch) => {
    postCntSwitcher(dispatch, true);
    await instance({
      method: 'POST',
      url: '/api/post_posting/editPost',
      data: {
        board_type,
        id,
        title: newTitle.current.value,
        content: newContent.current.value,
      },
    }).then(async () => {
      postCntSwitcher(dispatch, false);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${id}`,
      );
    });
  },
};
