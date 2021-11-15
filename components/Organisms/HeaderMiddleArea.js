import styled from 'styled-components';
import { useReducerState } from '../../src/context';
import TxtCatchphrase from '../Atoms/Text/TxtCatchphrase';
import HeaderPostingCreateButton from '../MoleCules/HeaderPostingCreateButton';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 110px;
  padding: 30px 20px 20px 20px;
  background: #20c997;
  border-radius: 25px 25px 0 0;

  @media screen and (max-width: 700px) {
    padding: 15px 20px 10px 20px;
    border-radius: 0;
    height: 90px;
  }
`;

export default function HeaderMiddleArea() {
  const userName = useReducerState().user.userName;

  return (
    <Styles>
      <TxtCatchphrase />
      {userName && <HeaderPostingCreateButton />}
    </Styles>
  );
}
