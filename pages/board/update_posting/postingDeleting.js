import BoardTitle from '../../../src/common/boardTitle';
import St_crud from '../../../styles/pages/board/St_crud';
import { useEffect } from 'react';
import getBoardData from '../../../src/common/getBoardData';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../../../src/common/context';
import {
  mountAnimation,
  unmountAnimation,
} from '../../../src/common/animationController';
import instance from '../../../src/common/instance';

export default function PostingDeleting() {
  const dispatch = useDispatch();
  const { board_type, id } = useReducerState().nowPostingEleObj;

  useEffect(() => {
    mountAnimation(dispatch, 'deleting');
    instance({
      method: 'POST',
      url: '/api/post_posting/deletePost',
      data: {
        board_type: board_type,
        id: id,
      },
    }).then(async () => {
      await getBoardData(dispatch);
      unmountAnimation(0, dispatch, `/board/board_list/${board_type}`);
    });
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [board_type, dispatch, id]);

  return (
    <St_crud>
      <BoardTitle backURL={``}>
        <div className="icon">
          <RiDeleteBin7Line />
        </div>
        <div className="title_name">포스트 삭제 중</div>
      </BoardTitle>
      <div className="delete_sign_area">
        <div className="icon">
          <AiOutlineLoading3Quarters />
        </div>
      </div>
    </St_crud>
  );
}
