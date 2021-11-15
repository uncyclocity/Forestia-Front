import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../src/context';
import BtnLogInOut from '../Atoms/Button/BtnLogInOut';
import TxtProfileName from '../Atoms/Text/TxtProfileName';

const Styles = styled.div`
  width: 167.5px;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div:last-child {
    margin-top: 15px;
  }

  @media screen and (max-width: 700px) {
    height: 100px;
    div:last-child {
      margin-top: 10px;
    }
  }
`;

export default function HomeUserNameArea() {
  const userName = useReducerState().user.userName;
  const dispatch = useDispatch();

  return (
    <Styles>
      <TxtProfileName userName={userName} />
      <BtnLogInOut
        text="로그아웃"
        onClick={() => {
          if (confirm('로그아웃하시겠습니까?')) {
            dispatch({ type: 'logout' });
            localStorage.removeItem('token');
            localStorage.removeItem('id');
          }
        }}
      />
    </Styles>
  );
}
