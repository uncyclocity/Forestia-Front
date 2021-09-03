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

const Styles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;

  .post_content {
    padding: 20px 0 30px 0;
    color: #525252;
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
