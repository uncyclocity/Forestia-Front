import styled from 'styled-components';
import { useReducerState } from '../../../pages/_context';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../../animation';
import Box from '../../box';

const Styles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;

  .post_content {
    padding: 20px 0 30px 0;
    color: #525252;
  }

  .comment_list {
    margin-bottom: 5px;

    .comment_amount {
      display: flex;
      flex-direction: row;
      padding-bottom: 10px;

      font-size: 17px;
      font-weight: bold;
      color: #828c99;

      border-bottom: 1px solid #e9ecef;

      .amount {
        color: #20c997;
      }
    }

    .comment_author_and_date {
      display: flex;
      flex-direction: row;
      margin-bottom: 5px;

      .cand_author {
        font-weight: bold;
        margin-right: 10px;
        font-size: 15px;
      }

      .cand_date {
        color: #828c99;
        font-size: 14px;
      }
    }

    .comment_content {
      font-size: 15px;
    }

    li {
      transform: translateX(-6.5%);
      list-style-type: none;
      margin-bottom: 15px;
    }
  }

  .comment_input {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    .comment_input_box {
      width: 570px;
      height: 50px;

      margin-right: 15px;

      border: none;
      border-radius: 10px;

      &:focus {
        outline: none;
        transition: 0.25s all ease-in;
        box-shadow: 0px 0px 15px #9aefd6;
      }

      &:not(:focus) {
        transition: 0.25s all ease-in;
        box-shadow: 0px 0px 15px #dedede;
      }
    }

    .comment_post_btn {
      background: #20c997;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 30px;

      &:hover {
        transition: 0.25s all ease-in;
        box-shadow: 0px 0px 15px #36deac;
        cursor: pointer;
      }

      &:not(:hover) {
        transition: 0.25s all ease-in;
        box-shadow: 0px 0px 15px #9aefd6;
      }
    }
  }
`;

export default function St_post({ children }) {
  const animation = useReducerState().animation;

  return (
    <BoxAnimation
      animation={animation}
      sw1={box_slide_up}
      sw2={box_empty}
      sw3={box_slide_down}
      sw4={box_zero_opacity}
    >
      <Box>
        <Styles>{children}</Styles>
      </Box>
    </BoxAnimation>
  );
}
