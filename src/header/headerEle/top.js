import { useDispatch } from '../../common/context';
import styled from 'styled-components';
import { unmountAnimation } from '../../common/animationController';
import LblLogo from '../../../components/Atoms/LblLogo';

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
        <LblLogo />
      </div>
    </Styles>
  );
}
