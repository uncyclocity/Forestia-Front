import { useReducerState } from "./_context";
import Box from "../components/box";
import styled, { css } from "styled-components";
import Board_title from "../components/board_title";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SiNextDotJs } from "react-icons/si";
import { slideUp, slideDown } from "../styles/keyframes/slide";

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

  .content {
    color: #5d5d5d;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .next_logo {
      color: #20c997;
      height: 100px;
      margin: 30px 40px 20px 40px;
      font-size: 90px;
    }

    .text {
      border-left: 1px solid #e9ecef;
      padding-left: 40px;
      .line {
        display: flex;
        flex-direction: row;
        .bold {
          color: #20c997;
          font-weight: bold;
        }
        &:not(:last-child) {
          margin-bottom: 3px;
        }
      }
    }
  }
`;

export default function About() {
  const animate = useReducerState().animate.about;

  return (
    <Animation animate={animate}>
      <Box>
        <Styles>
          <Board_title>
            <div className="icon">
              <AiOutlineInfoCircle />
            </div>
            게시판 소개
          </Board_title>
          <div className="content">
            <div className="next_logo">
              <SiNextDotJs />
            </div>
            <div className="text">
              <div className="line">본 게시판은</div>
              <div className="line">
                <div className="bold">백괴</div>가 Next.js의&nbsp;
                <div className="bold">라우팅</div>&nbsp;및&nbsp;
                <div className="bold">링크 컴포넌트</div>를
              </div>
              <div className="line">연습할 목적으로 만들어졌습니다.</div>
              <div className="line">
                장래가 기대되는 백괴에게 뜨거운 박수를 부탁드립니다.
              </div>
            </div>
          </div>
        </Styles>
      </Box>
    </Animation>
  );
}
