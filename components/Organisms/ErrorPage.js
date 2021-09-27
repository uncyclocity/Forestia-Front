import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
import ErrorPageBtns from '../MoleCules/ErrorPageBtns';
import ErrorPageSign from '../MoleCules/ErrorPageSign';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 20px;
`;

export default function ErrorPage({ errorCode }) {
  return (
    <CtnBox>
      <Styles>
        <ErrorPageSign errorCode={errorCode} />
        <ErrorPageBtns />
      </Styles>
    </CtnBox>
  );
}
