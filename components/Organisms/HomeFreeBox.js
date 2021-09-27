import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
import HomeBorderTitle from '../MoleCules/HomeBorderTitle';
import HomeFreeList from '../MoleCules/HomeFreeList';
import ListEmpty from '../MoleCules/ListEmpty';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 165px;
`;

const ContentListLayoutStyle = styled.div`
  width: 100%;
  height: 105px;
`;

export default function HomeFreeBox({ freeBoard }) {
  const boardName = 'free';
  const listUrl = '/board/board_list/free?page=1';

  return (
    <CtnBox>
      <BoxStyle>
        <HomeBorderTitle boardName={boardName} listUrl={listUrl} />
        <ContentListLayoutStyle>
          {freeBoard.length > 0 ? (
            <HomeFreeList freeBoard={freeBoard} />
          ) : (
            <ListEmpty />
          )}
        </ContentListLayoutStyle>
      </BoxStyle>
    </CtnBox>
  );
}
