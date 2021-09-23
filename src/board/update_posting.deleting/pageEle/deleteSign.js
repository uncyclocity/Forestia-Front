import styled from 'styled-components';
import IcoLoadingRing from '../../../../components/Atoms/IcoLoadingRing';

const Styles = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DeleteSign() {
  return (
    <Styles>
      <IcoLoadingRing />
    </Styles>
  );
}
