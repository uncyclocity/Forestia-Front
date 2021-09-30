import styled from 'styled-components';
import IcoListEmpty from '../Atoms/Icon/IcoListEmpty';
import TxtListEmpty from '../Atoms/Text/TxtListEmpty';

const Styles = styled.div`
  margin: 20px 0;
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
