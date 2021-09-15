import moment from 'moment';
import instance from '../common/instance';
import { unmountAnimation } from '../common/animationController';

const newCommId = (nowPostingEleObj) => {
  const commArr = nowPostingEleObj.comments;
  const commArrLen = commArr.length;
  const commId = commArrLen > 0 ? parseInt(commArr[commArrLen - 1].id) + 1 : 0;
  return commId;
};

export const postComm = {
  doPostCreate: async (nowPostingEleObj, contentRef, userName) => {
    const apiUrl = '/api/post_comment/postCreateComm';
    const comment_id = newCommId(nowPostingEleObj);
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
    });
  },
  doPostEdit: async (nowPostingEleObj, editCommObj, setEditCommObj) => {
    const apiUrl = '/api/post_comment/postEditComm';
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
    });
  },
  doPostDelete: async (board_type, post_id, comment_id, dispatch) => {
    await instance({
      method: 'POST',
      url: '/api/post_comment/postDeleteComm',
      data: {
        board_type,
        post_id,
        comment_id,
      },
    }).then(async () => {
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${post_id}`,
      );
    });
  },
};

export const postPosting = {
  doPostEditUpDown: async (data) => {
    const apiUrl = '/api/post_posting/postEditUpDown';
    await instance({
      method: 'POST',
      url: apiUrl,
      data,
    });
  },
  doPostCreate: async (board_type, id, title, content, pathArr, dispatch) => {
    const apiUrl = '/api/post_posting/postCreatePosting';
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
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${id}`,
      );
    });
  },
  doPostCreateImage: async (formData, board_type) => {
    const apiUrl = `/api/post_posting/postCreateImage?board_type=${board_type}`;
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
  doPostDelete: async (board_type, id) => {
    const apiUrl = 'api/post_posting/postDeletePosting';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type,
        id,
      },
    });
  },
  doPostDeleteImage: async (imagesUrl) => {
    const apiUrl = 'api/post_posting/postDeleteImage';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: { imagesUrl },
    });
  },
  doPostEdit: async (board_type, id, newTitle, newContent, dispatch) => {
    await instance({
      method: 'POST',
      url: '/api/post_posting/postEditPosting',
      data: {
        board_type,
        id,
        title: newTitle.current.value,
        content: newContent.current.value,
      },
    }).then(async () => {
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${id}`,
      );
    });
  },
};

export const getPosting = {
  doGetForList: async (nowPage, boardType) => {
    const res = await instance.get(
      `/api/get_posting/getPostingsForList?page=${nowPage}&board_type=${boardType}`,
    );
    return res.data;
  },
  doGetLength: async (boardType) => {
    const res = await instance.get(
      `/api/get_posting/getPostingsLen?board_type=${boardType}`,
    );
    return res.data;
  },
  doGetNowPostingEleObj: async (boardType, id) => {
    const res = await instance.get(
      `/api/get_posting/getPostingEle?id=${id}&board_type=${boardType}`,
    );
    return res.data;
  },
  doGetTop3: async (boardType) => {
    const res = await instance.get(
      `/api/get_posting/getPostingsTop3?board_type=${boardType}`,
    );
    return res.data;
  },
  doGetLatestId: async (boardType) => {
    const res = await instance.get(
      `/api/get_posting/getLatestPostingId?board_type=${boardType}`,
    );
    return res.data;
  },
};
