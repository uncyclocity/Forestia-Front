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
  padding: 20px 30px 5px 30px;

  .content_list {
    transform: translateX(-6.5%);
    li {
      list-style-type: none;
      margin-top: 10px;

      a {
        display: flex;
        flex-direction: row;

        .comment_amount {
          display: flex;
          justify-content: center;
          color: #20c997;

          .comment_icon {
            transform: translateY(3px);
            font-size: 13px;
          }

          .amount {
            transform: translateX(2px);
            font-size: 15px;
          }
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

export default function St_free({ children }) {
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
