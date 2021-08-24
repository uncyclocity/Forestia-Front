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

  .content_input {
    flex-direction: column;

    margin-top: 20px;
    margin-bottom: 15px;

    .content_title_input_box {
      width: 100%;
      font-size: 25px;
      font-weight: bold;
      color: #464646;
      border: none;
      outline: none;

      &::placeholder {
        color: #aaaaaa;
      }
    }

    .title_content_line {
      width: 50px;
      border: 2px solid #20c997;
      margin: 20px 0 20px 2px;
    }

    .content_input_box {
      width: 625px;
      height: 600px;

      margin-right: 15px;
      margin-bottom: 10px;

      border: none;
      border-bottom: 1px solid #e9ecef;

      outline: none;

      font-size: 17px;
      font-family: inherit;

      &::placeholder {
        color: #aaaaaa;
        font-style: italic;
      }
    }

    .content_post_btn {
      background: #20c997;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      margin-left: 90%;

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
  .free_photo_btn_area {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 48px;

    .free_photo_btn {
      width: 130px;
      height: 35px;

      display: flex;
      flex-direction: row;

      .free_btn {
        width: 100%;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;

        border: 2px solid #20c997;
        border-right: 1px solid #20c997;
        border-radius: 7px 0 0 7px;

        &:hover {
          transition: 0.2s all ease-in;
          background: #d8faef;
          cursor: pointer;
        }

        &:not(:hover) {
          transition: 0.2s all ease-in;
        }
      }

      .free_btn_act {
        width: 100%;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;

        border: 2px solid #20c997;
        border-right: 1px solid #20c997;
        border-radius: 7px 0 0 7px;

        color: white;

        background: #20c997;
      }

      .photo_btn {
        width: 100%;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;

        border: 2px solid #20c997;
        border-left: 1px solid #20c997;
        border-radius: 0 7px 7px 0;

        &:hover {
          transition: 0.2s all ease-in;
          background: #d8faef;
          cursor: pointer;
        }

        &:not(:hover) {
          transition: 0.2s all ease-in;
        }
      }

      .photo_btn_act {
        width: 100%;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;

        border: 2px solid #20c997;
        border-left: 1px solid #20c997;
        border-radius: 0 7px 7px 0;

        color: white;

        background: #20c997;
      }

      .board_name {
        margin-left: 5px;
        font-size: 15px;
      }
    }
  }
`;

export default function St_posting({ children }) {
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
