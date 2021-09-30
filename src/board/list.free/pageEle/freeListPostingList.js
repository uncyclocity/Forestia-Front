import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';
import ListEmpty from '../../../../components/MoleCules/ListEmpty';
import ListFreeTableTop from '../../../../components/MoleCules/ListFreeTableTop';
import ListLine from '../../../../components/MoleCules/ListLine';
import ListFreePostingBtn from '../../../../components/MoleCules/ListFreePostingBtn';

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
          <ListLine />
          {freeBoard.map((posting, index) => {
            return (
              <ListFreePostingBtn
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
