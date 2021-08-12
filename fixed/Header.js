import { useReducerState, useDispatch } from '../pages/_context';
import styled from 'styled-components';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCloud,
  AiOutlineCamera,
} from 'react-icons/ai';
import Box from '../styles/box';
import { useState } from 'react';
import Router from 'next/router';
import { unmountAnimation } from './AnimationController';
import { slideDown } from '../styles/keyframes/slide';

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

  return (
    <Box>
      <BoxStyles>
        <MenuBtnStyles>
          <ul>
            <li>
              <a>
                {nowPage === '/home' ? (
                  <div className="selected">
                    <AiOutlineHome />
                  </div>
                ) : (
                  <div onClick={() => unmountAnimation(0, dispatch, '/home')}>
                    <AiOutlineHome />
                  </div>
                )}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a>
                {nowPage === '/about' ? (
                  <div className="selected">
                    <AiOutlineInfoCircle />
                  </div>
                ) : (
                  <div onClick={() => unmountAnimation(0, dispatch, '/about')}>
                    <AiOutlineInfoCircle />
                  </div>
                )}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              {/* as : 해당 Link 클릭 시 이동 될 URL을 명시해주는 속성 */}

              <a>
                {nowPage === '/free' ? (
                  <div className="selected">
                    <AiOutlineCloud />
                  </div>
                ) : (
                  <div onClick={() => unmountAnimation(0, dispatch, '/free')}>
                    <AiOutlineCloud />
                  </div>
                )}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a>
                {nowPage === '/comuin' ? (
                  <div className="selected">
                    <AiOutlineCamera />
                  </div>
                ) : (
                  <div onClick={() => unmountAnimation(0, dispatch, '/comuin')}>
                    <AiOutlineCamera />
                  </div>
                )}
              </a>
            </li>
          </ul>
        </MenuBtnStyles>
      </BoxStyles>
    </Box>
  );
}
