import Router from 'next/router';
import {
  AiOutlineCamera,
  AiOutlineCloud,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import { useReducerState } from '../../src/context';
import BtnHeader from '../Atoms/Button/BtnHeader';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const ListStyle = styled.div`
  margin: 10px 0;
  ul {
    margin: 0px;
    padding-left: 0px;
    li {
      list-style-type: none;
      float: left;
      font-size: 26px;

      &:not(:last-child) {
        padding-right: 80px;

        @media screen and (max-width: 700px) {
          padding-right: 50px;
        }
      }
    }
`;

const headerMenuArr = ['index', 'about', 'free', 'photo'];

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

export default function HeaderFourButtons() {
  const nowPage = useReducerState().nowPage;

  const HMUrlArr = [
    '/',
    '/about',
    '/board/board_list/free?page=1',
    '/board/board_list/photo?page=1',
  ];

  return (
    <LayoutStyle>
      <ListStyle>
        <ul>
          {headerMenuArr.map((headerMenu, index) => {
            return (
              <li key={index}>
                {nowPage === headerMenu ? (
                  menuIconReturner(headerMenu, true)
                ) : (
                  <div onClick={() => Router.push(HMUrlArr[index])}>
                    {menuIconReturner(headerMenu, false)}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </ListStyle>
    </LayoutStyle>
  );
}
