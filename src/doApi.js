import moment from 'moment';
import Router from 'next/router';
import instance from './instance';

const newCommId = (nowPostingEleObj) => {
  const commArr = nowPostingEleObj.comments;
  const commArrLen = commArr.length;
  const commId = commArrLen > 0 ? parseInt(commArr[commArrLen - 1].id) + 1 : 0;
  return commId;
};

export const postComm = {
  doPostCreate: async (nowPostingEleObj, comment, userObj) => {
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
        author: userObj.userName,
        authorId: userObj.userId,
        date: nowDate,
        content: comment,
      },
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
  doPostDelete: async (board_type, post_id, comment_id) => {
    await instance({
      method: 'POST',
      url: '/api/post_comment/postDeleteComm',
      data: {
        board_type,
        post_id,
        comment_id,
      },
    }).then(() => {
      Router.push(`/board/posting?board_type=${board_type}&post_id=${post_id}`);
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
  doPostCreate: async (board_type, id, title, content, pathArr, userObj) => {
    const apiUrl = '/api/post_posting/postCreatePosting';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type,
        id,
        author: userObj.userName,
        authorId: userObj.userId,
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        title,
        content,
        comments: [],
        imagesUrl: pathArr,
      },
    }).then(async () => {
      Router.push(`/board/posting?board_type=${board_type}&post_id=${id}`);
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
  doPostEdit: async (board_type, id, title, content) => {
    await instance({
      method: 'POST',
      url: '/api/post_posting/postEditPosting',
      data: {
        board_type,
        id,
        title,
        content,
      },
    }).then(async () => {
      Router.push(`/board/posting?board_type=${board_type}&post_id=${id}`);
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

export const getUser = {
  doGetUserById: async (id) => {
    const res = await instance.get(`/api/get_users/getUserById?id=${id}`);
    return res.data;
  },
  doGetUserByNickName: async (nickName) => {
    const res = await instance.get(
      `/api/get_users/getUserByNickName?nickName=${nickName}`,
    );
    return res.data;
  },
};

export const postUser = {
  doPostUser: async (id, email, nickName, token) => {
    await instance({
      method: 'POST',
      url: '/api/post_users/postUser',
      data: {
        id,
        email,
        nickName,
        token,
      },
    }).then(async () => {
      Router.push('/home');
    });
  },
};
