import { CgTrees } from 'react-icons/cg';
import { HiOutlineKey } from 'react-icons/hi';
import St_top from '../styles/fixed/St_top';

export default function Top() {
  return (
    <St_top>
      <div className="forestia_logo">
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
