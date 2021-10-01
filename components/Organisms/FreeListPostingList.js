import { unmountAnimation } from '../../src/common/animationController';
import { useDispatch } from '../../src/common/context';
import styled from 'styled-components';
import ListEmpty from '../MoleCules/ListEmpty';
import FreeListTableTop from '../MoleCules/FreeListTableTop';
import ListLine from '../MoleCules/ListLine';
import FreeListPostingBtn from '../MoleCules/FreeListPostingBtn';

const ListStyle = styled.div`
  table {
    width: 640px;
    .top_list_line {
      border-top: 1px solid #20c997;
    }
  }
`;

export default function FreeListPostingList({ freeBoard }) {
  const dispatch = useDispatch();

  return (
    <ListStyle>
      {freeBoard.length > 0 ? (
        <table>
          <FreeListTableTop />
          <ListLine />
          {freeBoard.map((posting, index) => {
            return (
              <FreeListPostingBtn
                key={index}
                posting={posting}
                onClick={() =>
                  unmountAnimation(
                    0,
                    dispatch,
                    `/board/posting?board_type=free&post_id=${posting.id}`,
                  )
                }
              />
            );
          })}
        </table>
      ) : (
        <ListEmpty />
      )}
    </ListStyle>
  );
}
