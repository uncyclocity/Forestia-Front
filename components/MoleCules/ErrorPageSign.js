import styled from 'styled-components';
import IcoError from '../Atoms/Icon/IcoError';
import TxtError from '../Atoms/Text/TxtError';

const Styles = styled.div`
  height: 100%;
  padding: 20px 30px 20px 20px;
  border-right: 1px solid #e9ecef;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ErrorPageSign({ errorCode }) {
  return (
    <Styles>
      <IcoError />
      <TxtError errorCode={errorCode} />
    </Styles>
  );
}
