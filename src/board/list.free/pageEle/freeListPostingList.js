import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';
import ListEmpty from '../../../../components/MoleCules/ListEmpty';
import ListFreeTableTop from '../../../../components/MoleCules/ListFreeTableTop';
import ListFreeTableTds from '../../../../components/MoleCules/ListFreeTableTds';

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
          <ListFreeTableTop />
          <td colSpan="3" className="top_list_line" />
          {freeBoard.map((posting, index) => {
            return (
              <ListFreeTableTds
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
