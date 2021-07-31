import { AiOutlineCloud } from "react-icons/ai";
import styled, { css } from "styled-components";
import { useReducerState, useDispatch } from "../_context";
import Link from "next/link";
import Board_title from "../../components/board_title";
import { useEffect } from "react";
import Box from "../../components/box";
import { slideUp, slideDown } from "../../styles/keyframes/slide";

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

export default function Free() {
  const animate = useReducerState().animate.free;
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchForm = {
      type: "/free",
      isAnimate: false,
    };

    dispatch(dispatchForm);
  }, [dispatch]);

  return (
    <Animation animate={animate}>
      <Box>
        <Styles>
          <Board_title>
            <div className="icon">
              <AiOutlineCloud />
            </div>
            자게
          </Board_title>
          <div className="content_list">
            <ul>
              <li>
                <Link href="/free/[post_title]" as="/free/테스트1/">
                  <a>테스트1</a>
                </Link>
              </li>
              <li>
                <Link href="/free/[post_title]" as="/free/테스트2/">
                  <a>테스트2</a>
                </Link>
              </li>
              <li>
                <Link href="/free/[post_title]" as="/free/테스트3/">
                  <a>테스트3</a>
                </Link>
              </li>
            </ul>
          </div>
        </Styles>
      </Box>
    </Animation>
  );
}
