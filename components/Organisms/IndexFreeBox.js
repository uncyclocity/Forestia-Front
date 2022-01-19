import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
import IndexBorderTitle from '../MoleCules/IndexBorderTitle';
import IndexFreeList from '../MoleCules/IndexFreeList';
import ListEmpty from '../MoleCules/ListEmpty';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 165px;
`;

const ContentListLayoutStyle = styled.div`
  width: 100%;
  height: 105px;
`;

export default function IndexFreeBox({ freeBoard }) {
  const boardName = 'free';
  const listUrl = '/board/boardlist/free?page=1';

  return (
    <CtnBox>
      <BoxStyle>
        <IndexBorderTitle boardName={boardName} listUrl={listUrl} />
        <ContentListLayoutStyle>
          {freeBoard.length > 0 ? (
            <IndexFreeList freeBoard={freeBoard} />
          ) : (
            <ListEmpty />
          )}
        </ContentListLayoutStyle>
      </BoxStyle>
    </CtnBox>
  );
}
