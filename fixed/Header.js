import { useReducerState, useDispatch } from '../pages/_context';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCloud,
  AiOutlineCamera,
} from 'react-icons/ai';
import { unmountAnimation } from './AnimationController';
import St_Header from '../styles/fixed/St_Header';

export default function Header() {
  const nowPage = useReducerState().nowPage;
  const dispatch = useDispatch();

  const headerMenuArr = ['home', 'about', 'free', 'comuin'];

  const HMUrlArr = ['/home', '/about', '/board/free', '/board/comuin'];

  const menuIconReturner = (headerMenu) => {
    switch (headerMenu) {
      case headerMenuArr[0]:
        return <AiOutlineHome />;
      case headerMenuArr[1]:
        return <AiOutlineInfoCircle />;
      case headerMenuArr[2]:
        return <AiOutlineCloud />;
      case headerMenuArr[3]:
        return <AiOutlineCamera />;
      default:
        throw new Error('headerMenuArr에 존재하는 메뉴 이름이 아닙니다.');
    }
  };

  return (
    <St_Header>
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
    </St_Header>
  );
}
