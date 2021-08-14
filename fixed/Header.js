import { useReducerState, useDispatch } from '../pages/_context';
import styled from 'styled-components';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCloud,
  AiOutlineCamera,
} from 'react-icons/ai';
import Box from '../styles/box';
import { unmountAnimation } from './AnimationController';

const BoxStyles = styled.div`
  height: 80px;
  padding: 10px 0 5px 0;
`;

const MenuBtnStyles = styled.span`
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
      .selected {
        color: #20c997;
        font-weight: bold;

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
    <Box>
      <BoxStyles>
        <MenuBtnStyles>
          <ul>
            {headerMenuArr.map((headerMenu, index) => {
              return (
                <li key={index}>
                  <a>
                    {nowPage === headerMenu ? (
                      <div className="selected">
                        {menuIconReturner(headerMenu)}
                      </div>
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
        </MenuBtnStyles>
      </BoxStyles>
    </Box>
  );
}
