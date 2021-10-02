import styled from 'styled-components';
import BtnErrorPageGreen from '../Atoms/Button/BtnErrorPageGreen';
import BtnErrorPageWhite from '../Atoms/Button/BtnErrorPageWhite';
import { useDispatch } from '../../src/context';
import Router from 'next/router';

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
      <BtnErrorPageGreen text="뒤로" onClick={() => Router.back()} />
      <BtnErrorPageWhite text="홈" onClick={() => Router.push('/home')} />
    </Styles>
  );
}
