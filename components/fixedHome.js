import Link from "next/link";
import Title from "./title";
import styled from "styled-components";
import { AiOutlineCloud, AiOutlineCamera } from "react-icons/ai";
import { useReducerState } from "../pages/_context";

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
        list-style-type: none;
        transform: translateX(-16.5%);

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
  const freeBoard = state.freeBoard;
  const photoBoard = state.photoBoard;

  console.log(state);

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
            {freeBoard &&
              freeBoard.map((post, index) => {
                return (
                  <li key={index}>
                    <Link href="/free/[post_title]" as={"/free/" + post.title}>
                      <a>{post.title}</a>
                    </Link>
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
            {photoBoard &&
              photoBoard.map((post, index) => {
                return (
                  <li key={index}>
                    <Link href="/free/[post_title]" as={"/free/" + post.title}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Styles>
  );
}
