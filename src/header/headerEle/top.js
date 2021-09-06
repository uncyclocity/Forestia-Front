import { AiOutlineUser } from 'react-icons/ai';
import { CgTrees } from 'react-icons/cg';
import { useDispatch } from '../../common/context';
import styled from 'styled-components';
import { unmountAnimation } from '../../common/animationController';

const Styles = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  margin-top: 30px;
  flex-direction: row;

  .forestia_logo {
    display: flex;
    margin-right: auto;
    flex-direction: row;
    color: #20c997;
    font-family: Helvetica;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
  }

  .profile .signin_btn {
    background: #20c997;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    box-shadow: 0px 6px 10px #9aefd6;

    &:hover {
      transition: 0.25s all ease-in;
      box-shadow: 0px 6px 10px #36deac;
      cursor: pointer;
    }

    &:not(:hover) {
      transition: 0.25s all ease-in;
    }
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
        &nbsp;Forestia.
      </div>
      <div className="profile">
        <div className="signin_btn">
          <AiOutlineUser />
        </div>
      </div>
    </Styles>
  );
}
