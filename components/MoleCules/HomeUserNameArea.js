import styled from 'styled-components';
import { useDispatch, useReducerState } from '../Contexts/context';
import BtnProfileBox from '../Atoms/Button/BtnProfileBox';
import IcoAccountSetting from '../Atoms/Icon/IcoAccountSetting';
import TxtProfileName from '../Atoms/Text/TxtProfileName';

const LayoutStyle = styled.div`
  width: 106%;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > * + * {
    margin-top: 10px;
  }
`;

const BtnsStyle = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-between;
`;

export default function HomeUserNameArea({ accountSettings }) {
  const userName = useReducerState().user.userName;
  const dispatch = useDispatch();

  return (
    <LayoutStyle>
      <TxtProfileName userName={userName} />
      <BtnsStyle>
        <BtnProfileBox
          text="로그아웃"
          onClick={() => {
            if (confirm('로그아웃하시겠습니까?')) {
              dispatch({ type: 'logout' });
              localStorage.removeItem('token');
              localStorage.removeItem('id');
            }
          }}
        />
        <BtnProfileBox text={<IcoAccountSetting />} onClick={accountSettings} />
      </BtnsStyle>
    </LayoutStyle>
  );
}
