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
  const freeBoard = useReducerState().freeBoard;

  console.log("FixedHome() rendering\n" + freeBoard);

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
        <ul>
          <div className="content_list">
            <li>
              <Link href="/comuin/[post_title]" as="/comuin/테스트1/">
                <a>테스트1</a>
              </Link>
            </li>
            <li>
              <Link href="/comuin/[post_title]" as="/comuin/테스트2/">
                <a>테스트2</a>
              </Link>
            </li>
            <li>
              <Link href="/comuin/[post_title]" as="/comuin/테스트3/">
                <a>테스트3</a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </Styles>
  );
}
