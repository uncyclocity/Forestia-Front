import { useDispatch } from '../../common/context';
import styled from 'styled-components';
import { unmountAnimation } from '../../common/animationController';
import IcoLogo from '../../../components/Atoms/IcoLogo';

const Styles = styled.div`
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
`;

export default function Top() {
  const dispatch = useDispatch();
  const homeUrl = `/home`;

  return (
    <Styles>
      <div onClick={() => unmountAnimation(0, dispatch, homeUrl)}>
        <IcoLogo />
      </div>
    </Styles>
  );
}
