import styled from 'styled-components';
import { useDispatch } from '../Contexts/context';
import BtnGotoPostingPost from '../Atoms/Button/BtnGotoPostingPost';
import IcoBoard4Index from '../Atoms/Icon/IcoBoard4Index';
import TxtBoard4Index from '../Atoms/Text/TxtBoard4Index';

const Styles = styled.div`
  width: 100%;
  color: #20c997;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export default function IndexBorderTitle({ boardName, listUrl }) {
  const dispatch = useDispatch();

  return (
    <Styles>
      <IcoBoard4Index boardName={boardName} />
      <TxtBoard4Index boardName={boardName} />
      <BtnGotoPostingPost
        onClick={() => unmountAnimation(0, dispatch, listUrl)}
      />
    </Styles>
  );
}
