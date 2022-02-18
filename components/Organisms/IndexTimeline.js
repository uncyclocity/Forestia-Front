import styled from 'styled-components';
import IndexTimelineBtns from '../MoleCules/IndexTimelineBtns';
import ListEmpty from '../MoleCules/ListEmpty';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 7px;

  @media screen and (max-width: 700px) {
    height: 120px;
  }

  ul {
    width: 100%;
    padding: 0;
    margin: 0;

    & li > div {
      margin-top: 0;
    }
  }
`;

export default function IndexTimeline({ board }) {
  return (
    <Styles>
      {board.length > 0 ? (
        <ul>
          <IndexTimelineBtns board={board} />
        </ul>
      ) : (
        <ListEmpty />
      )}
    </Styles>
  );
}