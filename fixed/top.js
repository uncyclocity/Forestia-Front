import { CgTrees } from 'react-icons/cg';
import { HiOutlineKey } from 'react-icons/hi';
import { useDispatch } from '../pages/_context';
import St_top from '../styles/fixed/St_top';
import { unmountAnimation } from './AnimationController';

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
          <HiOutlineKey />
        </div>
      </div>
    </St_top>
  );
}
