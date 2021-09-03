import Board_title from '../../../styles/board_title';
import St_crud from '../../../styles/pages/board/St_crud';
import { useEffect } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../../src/animationController';
import getData from '../../../src/getData';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import instance from '../../../src/instance';
import { useDispatch, useReducerState } from '../../../src/_context';

export default function Deleting() {
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
      await getData(dispatch);
      unmountAnimation(0, dispatch, `/board/board_list/${board_type}`);
    });
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [board_type, dispatch, id]);

  return (
    <St_crud>
      <Board_title backURL={``}>
        <div className="icon">
          <RiDeleteBin7Line />
        </div>
        <div className="title_name">포스트 삭제 중</div>
      </Board_title>
      <div className="delete_sign_area">
        <div className="icon">
          <AiOutlineLoading3Quarters />
        </div>
      </div>
    </St_crud>
  );
}
