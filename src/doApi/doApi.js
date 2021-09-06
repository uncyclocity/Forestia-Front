import moment from 'moment';
import instance from '../common/instance';
import getBoardData from '../common/getBoardData';
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
  doUploadComment: (nowPostingEleObj, contentRef, userName, dispatch) => {
    const apiUrl = '/api/post_comment/uploadComment';
    const comment_id = getNewCommId(nowPostingEleObj);
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
    instance({
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
      await getBoardData(dispatch);
    });
  },
  doEditComment: (nowPostingEleObj, editCommObj, setEditCommObj, dispatch) => {
    const apiUrl = '/api/post_comment/editComment';
    instance({
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
      await getBoardData(dispatch);
    });
  },
  doDeleteComment: (board_type, post_id, comment_id, dispatch) => {
    instance({
      method: 'POST',
      url: '/api/post_comment/deleteComment',
      data: {
        board_type,
        post_id,
        comment_id,
      },
    }).then(async () => {
      await getBoardData(dispatch);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${post_id}`,
      );
    });
  },
};

export const posting = {
  doUpdateUpDown: (data, dispatch) => {
    postCntSwitcher(dispatch, true);
    const apiUrl = '/api/post_posting/editUD';
    instance({
      method: 'POST',
      url: apiUrl,
      data,
    }).then(async () => {
      await getBoardData(dispatch);
      postCntSwitcher(dispatch, false);
    });
  },
  doCreatePosting: (board_type, id, title, content, dispatch) => {
    const apiUrl = '/api/post_posting/uploadPost';
    instance({
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
      },
    }).then(async () => {
      await getBoardData(dispatch);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${id}`,
      );
    });
  },
  doDeletePosting: (board_type, id, dispatch) => {
    const apiUrl = 'api/post_posting/deletePost';
    instance({
      method: 'POST',
      url: apiUrl,
      data: {
        board_type,
        id,
      },
    }).then(async () => {
      await getBoardData(dispatch);
      unmountAnimation(0, dispatch, `/board/board_list/${board_type}`);
    });
  },
  doEditPosting: (board_type, id, newTitle, newContent, dispatch) => {
    instance({
      method: 'POST',
      url: '/api/post_posting/editPost',
      data: {
        board_type,
        id,
        title: newTitle.current.value,
        content: newContent.current.value,
      },
    }).then(async () => {
      await getBoardData(dispatch);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${id}`,
      );
    });
  },
};
