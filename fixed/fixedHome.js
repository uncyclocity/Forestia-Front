import Link from 'next/link';
import Title from './title';
import styled from 'styled-components';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../pages/_context';
import { useState } from 'react';
import { Router } from 'next/router';
import { unmountAnimation } from './AnimationController';
import { slideDown } from '../styles/keyframes/slide';

const Styles = styled.div`
  .content {
    width: 350px;
    padding: 5px 30px;
    color: #525252;
    float: left;

    .board_title {
      color: #20c997;
      font-weight: bold;
      border-bottom: 1px solid #e9ecef;

      margin-top: 15px;
      display: flex;
      flex-direction: row;
      font-size: 20px;

      .board_icon {
        font-size: 30px;
        transform: translateY(-7%);
      }
    }

    .content_list {
      li {
        width: 300px;
        list-style-type: none;
        transform: translateX(-13.5%);

        a {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &:not(:first-child) {
          margin-top: 10px;
        }

        &:hover {
          transition: 0.15s all ease-in;
          color: #20c997;
        }

        &:not(:hover) {
          transition: 0.15s all ease-in;
          color: #525252;
        }
      }
    }
  }
`;

export default function FixedHome() {
  const state = useReducerState();
  const dispatch = useDispatch();

  const freeBoard = state.freeBoard;
  const photoBoard = state.photoBoard;

  const [freeTop3] = useState([freeBoard[0], freeBoard[1], freeBoard[2]]);
  const [photoTop3] = useState([photoBoard[0], photoBoard[1], photoBoard[2]]);

  return (
    <Styles>
      <Title />
      <div className="content">
        <div className="board_title">
          <div className="board_icon">
            <AiOutlineCloud />
          </div>
          &nbsp;자게
        </div>

        <div className="content_list">
          <ul>
            {freeTop3 &&
              freeTop3.map((post, index) => {
                return (
                  <li key={index}>
                    <div
                      onClick={() =>
                        unmountAnimation(
                          0,
                          dispatch,
                          slideDown,
                          `/free/posts?id=${post.id}`,
                          `/free/${post.id}`,
                        )
                      }
                    >
                      <a>{post.title}</a>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="board_title">
          <div className="board_icon">
            <AiOutlineCamera />
          </div>
          &nbsp;짤게
        </div>
        <div className="content_list">
          <ul>
            {photoTop3 &&
              photoTop3.map((post, index) => {
                return (
                  <li key={index}>
                    <div
                      onClick={() =>
                        unmountAnimation(
                          0,
                          dispatch,
                          slideDown,
                          `/comuin/posts?id=${post.id}`,
                          `/comuin/${post.id}`,
                        )
                      }
                    >
                      <a>{post.title}</a>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Styles>
  );
}
