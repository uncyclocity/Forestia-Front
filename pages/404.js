import { VscError } from 'react-icons/vsc';
import { useDispatch } from './_context';
import { useEffect } from 'react';
import { unmountAnimation, mountAnimation } from '../fixed/AnimationController';
import St_404 from '../styles/pages/St_404';

export default function NotFoundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, '404');
  }, [dispatch]);

  return (
    <St_404>
      <div className="errorcode">
        <div className="error_icon">
          <VscError />
        </div>
        &nbsp;404 Error
      </div>
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
    </St_404>
  );
}
