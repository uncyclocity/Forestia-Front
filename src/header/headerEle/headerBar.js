import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCloud,
  AiOutlineCamera,
} from 'react-icons/ai';
import { useDispatch, useReducerState } from '../../common/context';
import styled from 'styled-components';
import { unmountAnimation } from '../../common/animationController';
import BtnHeader from '../../../components/Atoms/BtnHeader';

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
    '/board/board_list/free?page=1',
    '/board/board_list/photo?page=1',
  ];

  const menuIconReturner = (headerMenu, isSelected) => {
    switch (headerMenu) {
      case headerMenuArr[0]:
        return (
          <BtnHeader btnText="홈" isSelected={isSelected}>
            <AiOutlineHome />
          </BtnHeader>
        );
      case headerMenuArr[1]:
        return (
          <BtnHeader btnText="정보" isSelected={isSelected}>
            <AiOutlineInfoCircle />
          </BtnHeader>
        );
      case headerMenuArr[2]:
        return (
          <BtnHeader btnText="자게" isSelected={isSelected}>
            <AiOutlineCloud />
          </BtnHeader>
        );
      case headerMenuArr[3]:
        return (
          <BtnHeader btnText="짤게" isSelected={isSelected}>
            <AiOutlineCamera />
          </BtnHeader>
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
              {nowPage === headerMenu ? (
                menuIconReturner(headerMenu, true)
              ) : (
                <div
                  onClick={() => unmountAnimation(0, dispatch, HMUrlArr[index])}
                >
                  {menuIconReturner(headerMenu, false)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </MenuBtnAreaStyles>
  );
}
