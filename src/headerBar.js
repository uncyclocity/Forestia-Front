import { useReducerState, useDispatch } from '../pages/_context';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCloud,
  AiOutlineCamera,
} from 'react-icons/ai';
import { unmountAnimation } from './animationController';
import St_HeaderBar from '../styles/fixed/St_headerBar';

export default function HeaderBar() {
  const nowPage = useReducerState().nowPage;
  const dispatch = useDispatch();

  const headerMenuArr = ['home', 'about', 'free', 'photo'];

  const HMUrlArr = ['/home', '/about', '/board/free', '/board/photo'];

  const menuIconReturner = (headerMenu) => {
    switch (headerMenu) {
      case headerMenuArr[0]:
        return (
          <>
            <div className="menu_icon">
              <AiOutlineHome />
            </div>
            <div className="menu_name">홈</div>
          </>
        );
      case headerMenuArr[1]:
        return (
          <>
            <div className="menu_icon">
              <AiOutlineInfoCircle />
            </div>
            <div className="menu_name">정보</div>
          </>
        );
      case headerMenuArr[2]:
        return (
          <>
            <div className="menu_icon">
              <AiOutlineCloud />
            </div>
            <div className="menu_name">자게</div>
          </>
        );
      case headerMenuArr[3]:
        return (
          <>
            <div className="menu_icon">
              <AiOutlineCamera />
            </div>
            <div className="menu_name">짤게</div>
          </>
        );
      default:
        throw new Error('headerMenuArr에 존재하는 메뉴 이름이 아닙니다.');
    }
  };

  return (
    <St_HeaderBar>
      <ul>
        {headerMenuArr.map((headerMenu, index) => {
          return (
            <li key={index}>
              <a>
                {nowPage === headerMenu ? (
                  <div className="selected">{menuIconReturner(headerMenu)}</div>
                ) : (
                  <div
                    onClick={() =>
                      unmountAnimation(0, dispatch, HMUrlArr[index])
                    }
                  >
                    {menuIconReturner(headerMenu)}
                  </div>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </St_HeaderBar>
  );
}
