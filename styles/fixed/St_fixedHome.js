import styled from 'styled-components';
import { useReducerState } from '../../src/_context';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../boxAnimation';
import Box from '../box';

const Styles = styled.div`
  height: 200px;
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
        width: 300px;
        list-style-type: none;
        transform: translateX(-13.5%);

        a {
          display: block;
          overflow: hidden;
          cursor: pointer;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

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

export default function St_fixedHome({ children }) {
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
