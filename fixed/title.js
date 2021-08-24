import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { RiLeafLine } from 'react-icons/ri';
import { useDispatch, useReducerState } from '../pages/_context';
import St_title from '../styles/fixed/St_title';
import { unmountAnimation } from './AnimationController';

export default function Title() {
  const dispatch = useDispatch();
  const nowPage = useReducerState().nowPage;

  return (
    <St_title>
      <div className="catchphrase">
        풀내음이 함께하는
        <br />
        자취 이야기를 들려주세요&nbsp;
        <RiLeafLine />
      </div>
      <div className="btn_area">
        {nowPage === 'posting' ? (
          <div
            className="posting_btn"
            onClick={() => unmountAnimation(0, dispatch, `/home`)}
          >
            <div className="posting_icon">
              <AiOutlineClose />
            </div>
            <div className="posting_text">포스팅 취소</div>
          </div>
        ) : (
          <div
            className="posting_btn"
            onClick={() => unmountAnimation(0, dispatch, `/board/posting`)}
          >
            <div className="posting_icon">
              <AiOutlineEdit />
            </div>
            <div className="posting_text">포스팅</div>
          </div>
        )}
      </div>
    </St_title>
  );
}
