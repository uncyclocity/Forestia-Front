import styled from 'styled-components';
import { slideUp } from '../styles/keyframes/slide';

const Styles = styled.div`
  animation: 0.2s ${slideUp};
`;

export default function AppAnimation({ children }) {
  return <Styles>{children}</Styles>;
}
