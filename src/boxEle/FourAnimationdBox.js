import Box from '../../components/Atoms/box';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../../src/boxEle/boxAnimation';
import { useReducerState } from '../common/context';

export default function FourAnimationedBox({ children }) {
  const animation = useReducerState().animation;

  return (
    <BoxAnimation
      animation={animation}
      sw1={box_slide_up}
      sw2={box_empty}
      sw3={box_slide_down}
      sw4={box_zero_opacity}
    >
      <Box>{children}</Box>
    </BoxAnimation>
  );
}
