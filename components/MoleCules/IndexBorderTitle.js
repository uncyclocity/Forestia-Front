import styled from 'styled-components';
import IcoBoard4Index from '../Atoms/Icon/IcoBoard4Index';
import TxtBoard4Index from '../Atoms/Text/TxtBoard4Index';

const Styles = styled.div`
  width: 100%;
  color: #20c997;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export default function IndexBorderTitle({ boardName }) {
  return (
    <Styles>
      <IcoBoard4Index boardName={boardName} />
      <TxtBoard4Index boardName={boardName} />
    </Styles>
  );
}
