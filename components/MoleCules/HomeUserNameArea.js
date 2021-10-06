import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../src/context';
import { BtnLogInOut } from '../Atoms/Button/BtnLogInOut';
import TxtProfileName from '../Atoms/Text/TxtProfileName';

const Styles = styled.div`
  width: 167.5px;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function HomeUserNameArea() {
  const userName = useReducerState().user.userName;
  const dispatch = useDispatch();

  return (
    <Styles>
      <TxtProfileName userName={userName} />
      <BtnLogInOut
        text="로그아웃"
        onClick={() => dispatch({ type: 'logout' })}
      />
    </Styles>
  );
}
