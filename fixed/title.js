import { useDispatch, useReducerState } from '../pages/_context';
import St_title from '../styles/fixed/St_title';
import { unmountAnimation } from './AnimationController';

export default function Title({ children }) {
  const dispatch = useDispatch();
  const posting = useReducerState().posting;

  return (
    <St_title>
      <div className="catchphrase">
        풀내음이 함께하는
        <br />
        자취 이야기를 들려주세요
      </div>
      <div className="btn_area">
        {posting ? (
          <div
            className="posting_btn_act"
            onClick={() => unmountAnimation(1, dispatch)}
          >
            포스팅
          </div>
        ) : (
          <div
            className="posting_btn"
            onClick={() => unmountAnimation(0, dispatch, `/board/posting`)}
          >
            포스팅
          </div>
        )}
      </div>
    </St_title>
  );
}
