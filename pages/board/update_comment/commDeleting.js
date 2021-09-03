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
import { useRouter } from 'next/router';
import instance from '../../../src/instance';
import { useDispatch } from '../../../src/context';

export default function CommDeleting() {
  const router = useRouter();
  const { boardType, post_id, comment_id } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'commDeleting');
    instance({
      method: 'POST',
      url: '/api/post_comment/deleteComment',
      data: {
        boardType,
        post_id,
        comment_id,
      },
    }).then(async () => {
      await getData(dispatch);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${boardType}&post_id=${post_id}`,
      );
    });
  }, [boardType, comment_id, dispatch, post_id]);

  return (
    <St_crud>
      <Board_title backURL={``}>
        <div className="icon">
          <RiDeleteBin7Line />
        </div>
        <div className="title_name">댓글 삭제 중</div>
      </Board_title>
      <div className="delete_sign_area">
        <div className="icon">
          <AiOutlineLoading3Quarters />
        </div>
      </div>
    </St_crud>
  );
}
