import styled from 'styled-components';
import HomeBorderTitle from '../../../components/MoleCules/HomeBorderTitle';
import ListEmpty from '../../../components/MoleCules/ListEmpty';
import HomeFreeList from '../../../components/MoleCules/HomeFreeList';

const FreeBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #828c99;
  float: left;
`;

const ContentListLayoutStyle = styled.div`
  width: 100%;
  height: 105px;
`;

export default function FreeBox({ freeBoard }) {
  const boardName = 'free';
  const listUrl = '/board/board_list/free?page=1';

  return (
    <FreeBoxStyle>
      <HomeBorderTitle boardName={boardName} listUrl={listUrl} />
      <ContentListLayoutStyle>
        {freeBoard.length > 0 ? (
          <HomeFreeList freeBoard={freeBoard} />
        ) : (
          <ListEmpty />
        )}
      </ContentListLayoutStyle>
    </FreeBoxStyle>
  );
}
