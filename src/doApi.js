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
        `/get/postings-4-List?page=${nowPage}&board_type=${boardType}`,
      );
      return res.data;
    },
    ele: async (boardType, id) => {
      const res = await instance.get(
        `/get/posting-ele?id=${id}&board_type=${boardType}`,
      );
      return res.data;
    },
    latestId: async (boardType) => {
      const res = await instance.get(
        `/get/latest-posting-id?board_type=${boardType}`,
      );
      return res.data;
    },
    length: async (boardType) => {
      const res = await instance.get(
        `/get/postings-len?board_type=${boardType}`,
      );
      return res.data;
    },
    top3: async (boardType) => {
      const res = await instance.get(
        `/get/postings-top3?board_type=${boardType}`,
      );
      return res.data;
    }
  },
  post: async (board_type, id, title, content, pathArr, userObj) => {
    const apiUrl = '/post/posting';
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
  put: async (board_type, id, title, content) => {
    await instance({
      method: 'PUT',
      url: '/put/posting',
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
  delete: async (board_type, id) => {
    const apiUrl = '/delete/posting';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: {
        board_type,
        id,
      },
    });
  }
}

export const doComment = {
  post: async (nowPostingEleObj, comment, userObj) => {
    const apiUrl = '/post/comment';
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
  put: async (nowPostingEleObj, editCommObj, setEditCommObj) => {
    const apiUrl = '/put/comment';
    await instance({
      method: 'PUT',
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
  delete: async (board_type, post_id, comment_id) => {
    await instance({
      method: 'DELETE',
      url: '/delete/comment',
      data: {
        board_type,
        post_id,
        comment_id,
      },
    }).then(() => {
      Router.push(`/board/posting?board_type=${board_type}&post_id=${post_id}`);
    });
  }
}

export const doImage = {
  post: async (formData, board_type) => {
    const apiUrl = `/post/image?board_type=${board_type}`;
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
  delete: async (imagesUrl) => {
    const apiUrl = '/delete/image';
    await instance({
      method: 'DELETE',
      url: apiUrl,
      data: { imagesUrl },
    });
  }
}

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
    }
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
  }
}

export const doUserToken = {
  post: async (id, token) => {
    await instance({
      method: 'POST',
      url: '/post/user-token',
      data: {
        id,
        token,
      },
    }).then(async () => {});
  }
}
