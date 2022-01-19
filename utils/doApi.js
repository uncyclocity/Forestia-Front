import moment from 'moment';
import Router from 'next/router';
import instance from './instance';

const newCommId = (nowPostingEleObj) => {
  const commArr = nowPostingEleObj.comments;
  const commArrLen = commArr.length;
  const commId = commArrLen > 0 ? parseInt(commArr[commArrLen - 1].id) + 1 : 0;
  return commId;
};

export const doPosting = {
  get: {
    list: async (nowPage, boardType) => {
      const res = await instance.get(
        `/get/postings-4-List?page=${nowPage}&boardtype=${boardType}`,
      );
      return res.data;
    },
    ele: async (boardType, postId) => {
      const res = await instance.get(
        `/get/posting-ele?postid=${postId}&boardtype=${boardType}`,
      );
      return res.data;
    },
    latestId: async (boardType) => {
      const res = await instance.get(
        `/get/latest-posting-id?boardtype=${boardType}`,
      );
      return res.data;
    },
    length: async (boardType) => {
      const res = await instance.get(
        `/get/postings-len?boardtype=${boardType}`,
      );
      return res.data;
    },
    top3: async (boardType) => {
      const res = await instance.get(
        `/get/postings-top3?boardtype=${boardType}`,
      );
      return res.data;
    },
  },
  post: async (boardType, id, title, content, pathArr, userObj) => {
    const apiUrl = '/post/posting';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        boardType,
        id,
        author: userObj.userName,
        authorId: userObj.userId,
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        title,
        content,
        comments: [],
        imagesUrl: pathArr,
      },
    });
    Router.push(`/board/posting?boardtype=${boardType}&postid=${id}`);
  },
  put: async (boardType, id, title, content) => {
    await instance({
      method: 'PUT',
      url: '/put/posting',
      data: {
        boardType,
        id,
        title,
        content,
      },
    });
    Router.push(`/board/posting?boardtype=${boardType}&postid=${id}`);
  },
  delete: async (boardType, id) => {
    const apiUrl = '/delete/posting';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: {
        boardType,
        id,
      },
    });
    Router.push(`/board/boardlist/${boardType}?page=1`);
  },
};

export const doComment = {
  post: async (nowPostingEleObj, comment, userObj) => {
    const apiUrl = '/post/comment';
    const commentId = newCommId(nowPostingEleObj);
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        boardType: nowPostingEleObj.boardType,
        postId: nowPostingEleObj.id,
        commentId,
        author: userObj.userName,
        authorId: userObj.userId,
        date: nowDate,
        content: comment,
      },
    });
  },
  put: async (nowPostingEleObj, editCommObj, setEditCommObj) => {
    const apiUrl = '/put/comment';
    await instance({
      method: 'PUT',
      url: apiUrl,
      data: {
        boardType: nowPostingEleObj.boardType,
        postId: nowPostingEleObj.id,
        commentId: editCommObj.id,
        content: editCommObj.content,
      },
    });
    setEditCommObj(false);
  },
  delete: async (boardType, postId, commentId) => {
    await instance({
      method: 'DELETE',
      url: '/delete/comment',
      data: {
        boardType,
        postId,
        commentId,
      },
    });
    setTimeout(
      () =>
        Router.push(`/board/posting?boardtype=${boardType}&postid=${postId}`),
      300,
    );
  },
};

export const doImage = {
  post: async (formData, boardType) => {
    const apiUrl = `/post/image?boardtype=${boardType}`;
    let pathArr = [];
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
  delete: async (imagesUrl) => {
    const apiUrl = '/delete/image';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: { imagesUrl },
    });
  },
};

export const doUpDown = {
  put: async (data) => {
    const apiUrl = '/put/updown';
    await instance({
      method: 'PUT',
      url: apiUrl,
      data,
    });
  },
};

export const doUser = {
  get: {
    byId: async (id) => {
      const res = await instance.get(`/get/user-by-id?id=${id}`);
      return res.data;
    },
    byNickName: async (nickName) => {
      const res = await instance.get(
        `/get/user-by-nickname?nickName=${nickName}`,
      );
      return res.data;
    },
    byToken: async (token) => {
      const res = await instance.get(`/get/user-by-token?token=${token}`);
      return res.data;
    },
  },
  post: async (id, email, nickName, token) => {
    await instance({
      method: 'POST',
      url: '/post/user',
      data: {
        id,
        email,
        nickName,
        token,
      },
    }).then(async () => {
      Router.push('/');
    });
  },
  delete: async (id) => {
    await instance({
      method: 'DELETE',
      url: '/delete/user',
      data: {
        id,
      },
    });
  },
};

export const doUserToken = {
  get: async (id, email) => {
    const res = await instance({
      method: 'GET',
      url: `/get/user-token?id=${id}&email=${email}`,
    });
    return res.data;
  },
  post: async (id, token) => {
    await instance({
      method: 'POST',
      url: '/post/user-token',
      data: {
        id,
        token,
      },
    });
  },
};
