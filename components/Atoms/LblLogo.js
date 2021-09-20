import { CgTrees } from 'react-icons/cg';
import styled from 'styled-components';

export default function LblLogo() {
  const Styles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #20c997;
    cursor: pointer;
    height: 50px;
    font-size: 50px;
  `;

  return (
    <Styles>
      <CgTrees />
    </Styles>
  );
}
