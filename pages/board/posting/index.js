import { useDispatch } from '../../../src/context';
import { useEffect } from 'react';
import { getPosting } from '../../../src/doApi';
import PostingTemplate from '../../../components/Templates/PostingTemplate';

const getDoUpdateUDdata = async (
  udType,
  revUdType,
  nowPostingEleObj,
  userName,
  dispatch,
  setNowPostingEleObj,
) => {
  const defaultData = {
    board_type: nowPostingEleObj.board_type,
    post_id: nowPostingEleObj.id,
    ud_type: udType,
    userName,
  };

  const udClickerArr = nowPostingEleObj[udType].clicker;
  const revUdClickerArr = nowPostingEleObj[revUdType].clicker;

  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });

  if (udClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      ...defaultData,
      operation: 'sub',
    };
    await postPosting.doPostEditUpDown(data);
  } else if (revUdClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      ...defaultData,
      rev_ud_type: revUdType,
      operation: 'addsub',
    };
    await postPosting.doPostEditUpDown(data);
  } else {
    const data = {
      ...defaultData,
      operation: 'add',
    };
    await postPosting.doPostEditUpDown(data);
  }

  const getPostingEle = await getPosting.doGetNowPostingEleObj(
    nowPostingEleObj.board_type,
    nowPostingEleObj.id,
  );

  const nowPostingEleObjUpdated = {
    ...getPostingEle,
    board_type: nowPostingEleObj.board_type,
  };

  setNowPostingEleObj(nowPostingEleObjUpdated);

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};

const postPageSwitchOn = (dispatch) => {
  dispatch({
    type: 'postpage_switcher',
    isPostPage: true,
  });
};

const postPageSwitchOff = (dispatch) => {
  dispatch({
    type: 'postpage_switcher',
    isPostPage: false,
  });
};

export default function Post({ nowPostingEleObjRaw, board_type }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: board_type,
    });
    dispatch({ type: 'editpost_data', nowPostingEleObj: nowPostingEleObjRaw });
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [board_type, dispatch, nowPostingEleObjRaw]);

  return (
    <PostingTemplate
      nowPostingEleObjRaw={nowPostingEleObjRaw}
      board_type={board_type}
    />
  );
}

Post.getInitialProps = async (ctx) => {
  const { board_type, post_id } = ctx.query;
  const getPostingEle = await getPosting.doGetNowPostingEleObj(
    board_type,
    post_id,
  );
  const nowPostingEleObjRaw = { ...getPostingEle, board_type };
  return { nowPostingEleObjRaw, board_type };
};
