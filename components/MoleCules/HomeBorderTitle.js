import styled from 'styled-components';
import { useDispatch } from '../Contexts/context';
import BtnGotoPostingPost from '../Atoms/Button/BtnGotoPostingPost';
import IcoBoard4Home from '../Atoms/Icon/IcoBoard4Home';
import TxtBoard4Home from '../Atoms/Text/TxtBoard4Home';

const Styles = styled.div`
  width: 100%;
  color: #20c997;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export default function HomeBorderTitle({ boardName, listUrl }) {
  const dispatch = useDispatch();

  return (
    <Styles>
      <IcoBoard4Home boardName={boardName} />
      <TxtBoard4Home boardName={boardName} />
      <BtnGotoPostingPost
        onClick={() => unmountAnimation(0, dispatch, listUrl)}
      />
    </Styles>
  );
}
