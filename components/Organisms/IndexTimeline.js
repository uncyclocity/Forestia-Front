import styled from 'styled-components';
import IndexTimelineBtns from '../MoleCules/IndexTimelineBtns';
import ListEmpty from '../MoleCules/ListEmpty';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 7px;

  ul {
    width: 100%;
    padding: 0;
    margin: 0;

    & li > div {
      margin-top: 0;
    }
  }
`;

export default function IndexTimeline({ board, authorArr }) {
  return (
    <Styles>
      {board.length > 0 ? (
        <ul>
          <IndexTimelineBtns board={board} authorArr={authorArr} />
        </ul>
      ) : (
        <ListEmpty />
      )}
    </Styles>
  );
}
