import styled from 'styled-components';
import { useReducerState } from '../../../src/_context';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../../boxAnimation';
import Box from '../../box';
import { spin_360 } from '../../keyframes/spin';

const Styles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;

  .content_input {
    flex-direction: column;

    margin: 20px 0 15px 0;

    .content_title_input_box {
      width: 640px;
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
      width: 640px;
      height: 300px;

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

      width: 80px;
      height: 35px;

      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 30px;

      margin-left: 87%;

      cursor: pointer;

      .post_icon {
        height: 23px;
        font-size: 20px;
        margin-right: 5px;
      }

      .post_text {
        font-size: 18px;
        font-weight: bold;
      }

      &:hover {
        background: #37dfad;
      }
    }
  }
  .free_photo_btn_area {
    color: #20c997;

    .free_photo_btn {
      width: 130px;
      height: 35px;

      display: flex;
      flex-direction: row;

      margin: 0 0 20px 2px;

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

        cursor: pointer;
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

        cursor: pointer;
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

  .board_sign_area {
    margin: 0 0 20px 2px;
    .board_sign {
      width: 65px;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;

      border: 2px solid #20c997;
      border-radius: 7px;

      background: #20c997;
      color: white;

      .board_name {
        margin-left: 5px;
        font-size: 15px;
      }
    }
  }

  .delete_sign_area {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      width: 70px;
      height: 70px;
      font-size: 70px;
      color: #20c997;
      animation: ${spin_360} infinite 5s linear;
    }
  }
`;

export default function St_crud({ children }) {
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
