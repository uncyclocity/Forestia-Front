import styled from 'styled-components';
import { useReducerState } from '../../../pages/_context';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../../boxAnimation';
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
        margin-left: 7px;
        color: #20c997;
      }
    }

    .comment_author_and_date {
      display: flex;
      flex-direction: row;
      margin-bottom: 5px;

      .cand_author {
        margin-right: 10px;
        font-weight: bold;
        font-size: 15px;
      }

      .cand_date {
        margin-right: 10px;
        position: relative;
        top: 1px;
        color: #828c99;
        font-size: 14px;
      }

      .cand_edit_und_del {
        color: #20c997;
        font-size: 14px;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 7px;
        }
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
      border-radius: 5px;

      font-family: inherit;

      border: 1px solid #e9ecef;

      &:focus {
        outline: none;
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
