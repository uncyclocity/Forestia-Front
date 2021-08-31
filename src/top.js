import { AiOutlineUser } from 'react-icons/ai';
import { CgTrees } from 'react-icons/cg';
import St_top from '../styles/fixed/St_top';
import { unmountAnimation } from './animationController';
import { useDispatch } from './_context';

export default function Top() {
  const dispatch = useDispatch();

  return (
    <St_top>
      <div
        className="forestia_logo"
        onClick={() => unmountAnimation(0, dispatch, '/home')}
      >
        <CgTrees />
        &nbsp;Forestia.
      </div>
      <div className="profile">
        <div className="signin_btn">
          <AiOutlineUser />
        </div>
      </div>
    </St_top>
  );
}
