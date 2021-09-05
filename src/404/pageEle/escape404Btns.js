import { unmountAnimation } from '../../common/animationController';
import { useDispatch } from '../../common/context';

export default function Escape404Btns() {
  const dispatch = useDispatch();

  return (
    <div className="btns">
      <div className="back_btn" onClick={() => unmountAnimation(1, dispatch)}>
        뒤로
      </div>
      <div
        className="home_btn"
        onClick={() => unmountAnimation(0, dispatch, '/home')}
      >
        메인
      </div>
    </div>
  );
}
