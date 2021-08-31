import Board_title from '../../styles/board_title';
import St_crud from '../../styles/pages/board/St_crud';
import { useDispatch, useReducerState } from '../_context';
import { useEffect } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../src/animationController';
import instance from '../api/instance';
import getData from '../../src/getData';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Deleting() {
  const dispatch = useDispatch();
  const { boardType, id } = useReducerState().editData;

  useEffect(() => {
    mountAnimation(dispatch, 'deleting');
    instance({
      method: 'POST',
      url: '/api/post_posting/deletePost',
      data: {
        boardType: boardType,
        id: id,
      },
    }).then(async () => {
      await getData(dispatch);
      unmountAnimation(0, dispatch, `/board/${boardType}`);
    });
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [boardType, dispatch, id]);

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
