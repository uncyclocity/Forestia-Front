import { AiOutlineCamera } from "react-icons/ai";
import styled, { css } from "styled-components";
import { useReducerState } from "../_context";
import Link from "next/link";
import Board_title from "../../components/board_title";
import Box from "../../components/box";
import { slideUp, slideDown } from "../../styles/keyframes/slide";
import { useState } from "react";

const Animation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
  animation-fill-mode: forwards;
  ${({ animate }) =>
    animate &&
    css`
      animation-name: ${slideDown};
      animation-duration: 0.1s;
    `}
`;

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .content_list {
    transform: translateX(-6.5%);
    li {
      list-style-type: none;
      &:not(:first-child) {
        margin-top: 10px;
      }
      &:hover {
        color: #20c997;
      }
    }
  }
`;

export default function Comuin() {
  const state = useReducerState();
  const animate = state.animate.comuin;
  const photoBoard = state.photoBoard;

  const [photoTop3] = useState([photoBoard[0], photoBoard[1], photoBoard[2]]);

  return (
    <Animation animate={animate}>
      <Box>
        <Styles>
          <Board_title>
            <div className="icon">
              <AiOutlineCamera />
            </div>
            짤게
          </Board_title>
          <div className="content_list">
            <ul>
              {photoTop3 &&
                photoTop3.map((post, index) => {
                  return (
                    <li key={index}>
                      <Link
                        as={`/comuin/${post.id}`}
                        href={`/comuin/posts?_id=${post.id}`}
                      >
                        <a>{post.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Styles>
      </Box>
    </Animation>
  );
}
