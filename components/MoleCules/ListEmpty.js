import styled from 'styled-components';
import IcoListEmpty from '../Atoms/Icon/IcoListEmpty';
import TxtListEmpty from '../Atoms/Text/TxtListEmpty';

const Styles = styled.div`
  height: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default function ListEmpty() {
  return (
    <Styles>
      <IcoListEmpty />
      <TxtListEmpty />
    </Styles>
  );
}
