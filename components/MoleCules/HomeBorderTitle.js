import styled from 'styled-components';
import BtnGotoPostingCreating from '../Atoms/Button/BtnGotoPostingCreating';
import IcoBoard4Home from '../Atoms/Icon/IcoBoard4Home';
import TxtBoard4Home from '../Atoms/Text/TxtBoard4Home';

const Styles = styled.div`
  width: 100%;
  color: #20c997;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export default function HomeBorderTitle({ boardName }) {
  const freeListUrl = '/board/board_list/free?page=1';

  return (
    <Styles>
      <IcoBoard4Home boardName={boardName} />
      <TxtBoard4Home boardName={boardName} />
      <BtnGotoPostingCreating
        onClick={() => unmountAnimation(0, dispatch, freeListUrl)}
      />
    </Styles>
  );
}
