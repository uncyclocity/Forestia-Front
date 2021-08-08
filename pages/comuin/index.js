import { AiOutlineCamera } from "react-icons/ai";
import styled from "styled-components";
import { useDispatch, useReducerState } from "../_context";
import Link from "next/link";
import Board_title from "../../styles/board_title";
import Box from "../../styles/box";
import { useEffect } from "react";
import { BoxAnimation } from "../../styles/animation";
import { slideUp, slideDown } from "../../styles/keyframes/slide";

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
  const dispatch = useDispatch();

  const animation = state.animation;
  const photoBoard = state.photoBoard;

  

  useEffect(() => {
    dispatch({
      type: "initiate",
      nowPage: "/comuin",
      animation: 1
    })
    setTimeout(() => {
      dispatch({
        type: "change_animation",
        animation: 2
      });
    }, 350)
  }, [dispatch])

  return (
    <BoxAnimation animation={animation}>
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
              {photoBoard &&
                photoBoard.map((post, index) => {
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
    </BoxAnimation>
  );
}
