import styled from 'styled-components';
import { slideUpAppear } from '../../styles/keyframes/slide';

const Styles = styled.div`
  animation: 0.2s ${slideUpAppear};
`;

export default function AppAnimation({ children }) {
  return <Styles>{children}</Styles>;
}
