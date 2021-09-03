import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCloud,
  AiOutlineCamera,
} from 'react-icons/ai';
import { unmountAnimation } from '../../animationController';
import { useDispatch, useReducerState } from '../../_context';
import styled from 'styled-components';

const MenuBtnAreaStyles = styled.span`
  display: flex;
  justify-content: center;

  ul {
    padding-right: 40px;
    li {
      list-style-type: none;
      float: left;
      font-size: 26px;

      &:not(:last-child) {
        padding-right: 80px;
      }
    }

    a {
      cursor: pointer;

      .menu_icon {
        height: 30px;
        margin-bottom: 3px;
      }

      .menu_name {
        display: flex;
        justify-content: center;
        font-size: 13px;
      }

      .selected {
        color: #20c997;

        &:hover {
          transition: 0.15s all ease-in;
          color: #6debac;
        }

        &:not(:hover) {
          transition: 0.15s all ease-in;
          color: #20c997;
        }
      }

      &:hover {
        transition: 0.15s all ease-in;
        color: #6debac;
      }
  
      &:not(:hover) {
        transition: 0.15s all ease-in;
        color: #828c99;
      }
    }
`;

export default function HeaderBar() {
  const nowPage = useReducerState().nowPage;
  const dispatch = useDispatch();

  const headerMenuArr = ['home', 'about', 'free', 'photo'];

  const HMUrlArr = [
    '/home',
    '/about',
    '/board/board_list/free',
    '/board/board_list/photo',
  ];

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
    <MenuBtnAreaStyles>
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
    </MenuBtnAreaStyles>
  );
}
