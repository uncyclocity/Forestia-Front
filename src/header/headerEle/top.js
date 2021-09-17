import { CgTrees } from 'react-icons/cg';
import { useDispatch } from '../../common/context';
import styled from 'styled-components';
import { unmountAnimation } from '../../common/animationController';

const Styles = styled.div`
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;

  .forestia_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #20c997;
    cursor: pointer;
    height: 50px;
    font-size: 50px;
  }
`;

export default function Top() {
  const dispatch = useDispatch();

  return (
    <Styles>
      <div
        className="forestia_logo"
        onClick={() => unmountAnimation(0, dispatch, '/home')}
      >
        <CgTrees />
      </div>
    </Styles>
  );
}
