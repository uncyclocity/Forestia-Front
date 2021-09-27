import styled from 'styled-components';
import BtnErrorPageGreen from '../Atoms/Button/BtnErrorPageGreen';
import BtnErrorPageWhite from '../Atoms/Button/BtnErrorPageWhite';
import { unmountAnimation } from '../../src/common/animationController';
import { useDispatch } from '../../src/common/context';

const Styles = styled.div`
  padding: 20px 10px 20px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export default function ErrorPageBtns() {
  const dispatch = useDispatch();

  return (
    <Styles>
      <BtnErrorPageGreen
        text="뒤로"
        onClick={() => unmountAnimation(1, dispatch)}
      />
      <BtnErrorPageWhite
        text="홈"
        onClick={() => unmountAnimation(0, dispatch, '/home')}
      />
    </Styles>
  );
}
