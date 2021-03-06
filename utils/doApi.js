import moment from 'moment';
import Router from 'next/router';
import instance from './instance';

const newCommId = (nowPostingEleObj) => {
  const commArr = nowPostingEleObj.comments;
  const commArrLen = commArr.length;
  const commId = commArrLen > 0 ? parseInt(commArr[commArrLen - 1].id) + 1 : 0;
  return commId;
};

const newReplyId = (replyArr) => {
  const replyArrLen = replyArr.length;
  const replyId =
    replyArrLen > 0 ? parseInt(replyArr[replyArrLen - 1].id) + 1 : 0;
  return replyId;
};

export const doPosting = {
  get: {
    list: async (nowPage, boardType) => {
      const res = await instance.get(
        `/posting/postings-4-List?page=${nowPage}&boardtype=${boardType}`,
      );
      return res.data;
    },
    ele: async (boardType, postId) => {
      const res = await instance.get(
        `/posting/posting-ele?postid=${postId}&boardtype=${boardType}`,
      );
      return res.data;
    },
    latestId: async (boardType) => {
      const res = await instance.get(
        `/posting/latest-posting-id?boardtype=${boardType}`,
      );
      return res.data;
    },
    length: async (boardType) => {
      const res = await instance.get(
        `/posting/postings-len?boardtype=${boardType}`,
      );
      return res.data;
    },
    top3: async (boardType) => {
      const res = await instance.get(
        `/posting/postings-top3?boardtype=${boardType}`,
      );
      return res.data;
    },
  },
  post: async ({ boardType, id, title, content, pathArr }) => {
    const apiUrl = '/posting';
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        boardType,
        id,
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        title,
        content,
        comments: [],
        imagesUrl: pathArr,
      },
    });
    Router.push(`/board/posting?boardtype=${boardType}&postid=${id}`);
  },
  put: async ({ boardType, id, title, content, authorId }) => {
    const apiUrl = '/posting';
    await instance({
      method: 'PUT',
      url: apiUrl,
      data: {
        boardType,
        id,
        title,
        content,
        authorId,
      },
    });
    Router.push(`/board/posting?boardtype=${boardType}&postid=${id}`);
  },
  delete: async ({ boardType, id, authorId }) => {
    const apiUrl = '/posting';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: {
        boardType,
        id,
        authorId,
      },
    });
    Router.push(`/board/boardlist/${boardType}?page=1`);
  },
};

export const doComment = {
  post: async ({ nowPostingEleObj, comment }) => {
    const apiUrl = '/comment';
    const commentId = newCommId(nowPostingEleObj);
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        boardType: nowPostingEleObj.boardType,
        postId: nowPostingEleObj.id,
        commentId,
        date: nowDate,
        content: comment,
      },
    });
  },
  put: async ({ nowPostingEleObj, editCommObj, setEditCommObj, authorId }) => {
    const apiUrl = '/comment';
    await instance({
      method: 'PUT',
      url: apiUrl,
      data: {
        boardType: nowPostingEleObj.boardType,
        postId: nowPostingEleObj.id,
        commentId: editCommObj.id,
        content: editCommObj.content,
        authorId,
      },
    });
    setEditCommObj(false);
  },
  delete: async ({ boardType, postId, commentId, authorId }) => {
    const apiUrl = '/comment';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: {
        boardType,
        postId,
        commentId,
        authorId,
      },
    });
    setTimeout(
      () =>
        Router.push(`/board/posting?boardtype=${boardType}&postid=${postId}`),
      300,
    );
  },
};

export const doReply = {
  post: async ({ nowPostingEleObj, replyObj, replyArr }) => {
    const apiUrl = '/reply';
    const replyId = newReplyId(replyArr);
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
    await instance({
      method: 'POST',
      url: apiUrl,
      data: {
        boardType: nowPostingEleObj.boardType,
        postId: nowPostingEleObj.id,
        commentId: replyObj.commId,
        replyId,
        date: nowDate,
        content: replyObj.content,
      },
    });
  },
  put: async ({
    nowPostingEleObj,
    editReplyObj,
    setEditReplyObj,
    authorId,
    replyId,
    commentId,
  }) => {
    const apiUrl = '/reply';
    await instance({
      method: 'PUT',
      url: apiUrl,
      data: {
        boardType: nowPostingEleObj.boardType,
        postId: nowPostingEleObj.id,
        content: editReplyObj.content,
        authorId,
        replyId,
        commentId,
      },
    });
    setEditReplyObj(false);
  },
  delete: async ({ boardType, postId, commentId, authorId, replyId }) => {
    const apiUrl = '/reply';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: {
        boardType,
        postId,
        commentId,
        authorId,
        replyId,
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
    const apiUrl = `/image?boardtype=${boardType}`;
    const pathArr = await instance({
      method: 'POST',
      url: apiUrl,
      header: { 'content-type': 'multipart/form-data' },
      data: formData,
    });
    return pathArr.data;
  },
  delete: async (imagesUrl) => {
    const apiUrl = '/image';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: { imagesUrl },
    });
  },
};

export const doUpDown = {
  put: async (data) => {
    const apiUrl = '/up-down';
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
      const res = await instance.get(`/user/user-by-id?id=${id}`);
      return res.data;
    },
    byNickName: async (nickName) => {
      const res = await instance.get(
        `/user/user-by-nickname?nickName=${nickName}`,
      );
      return res.data;
    },
    byToken: async () => {
      const res = await instance.get(`/user/user-by-token`);
      return res.data;
    },
  },
  post: async (id, email, nickName, imageUrl) => {
    await instance({
      method: 'POST',
      url: '/user',
      data: {
        id,
        email,
        nickName,
        imageUrl,
      },
    });
    Router.push('/');
  },
  delete: async (id) => {
    await instance({
      method: 'DELETE',
      url: '/user',
      data: {
        id,
      },
    });
  },
};

export const doUserProfileImage = {
  post: async (formData) => {
    const apiUrl = `/user-profile-image`;
    const pathArr = await instance({
      method: 'POST',
      url: apiUrl,
      header: { 'content-type': 'multipart/form-data' },
      data: formData,
    });
    return pathArr.data;
  },
  delete: async (imagesUrl) => {
    const apiUrl = '/image';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: { imagesUrl },
    });
  },
};

export const doUserToken = {
  get: async (id, email) => {
    const res = await instance({
      method: 'GET',
      url: `/user-token?id=${id}&email=${email}`,
    });
    return res.data;
  },
};

export const doRefreshToken = {
  get: {
    isValid: async () => {
      try {
        const res = await instance({
          method: 'GET',
          url: `/refresh-token/refresh-token-is-valid`,
        });
        return res.data;
      } catch (error) {
        return false;
      }
    },
  },
  post: async (id) => {
    await instance({
      method: 'POST',
      url: '/refresh-token',
      data: { id },
    });
  },
};
