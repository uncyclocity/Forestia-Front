import styled from 'styled-components';
import { unmountAnimation } from '../../src/common/animationController';
import { useDispatch } from '../../src/common/context';
import IcoLogo from '../Atoms/Icon/IcoLogo';

const Styles = styled.div`
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
`;

export default function HeaderLogoArea() {
  const dispatch = useDispatch();
  const homeUrl = '/home';

  return (
    <Styles onClick={() => unmountAnimation(0, dispatch, homeUrl)}>
      <IcoLogo />
    </Styles>
  );
}
