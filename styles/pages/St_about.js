import styled from 'styled-components';
import { useReducerState } from '../../pages/_context';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../boxAnimation';
import Box from '../box';

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

export default function St_about({ children }) {
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
