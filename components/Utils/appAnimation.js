import styled from 'styled-components';
import { slideUpInit } from '../../styles/keyframes/slide';

const Styles = styled.div`
  animation: 0.2s ${slideUpInit};
`;

export default function AppAnimation({ children }) {
  return <Styles>{children}</Styles>;
}
