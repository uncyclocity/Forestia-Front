import styled from 'styled-components';
import ListEmpty from '../MoleCules/ListEmpty';
import FreeListTableTop from '../MoleCules/FreeListTableTop';
import ListLine from '../MoleCules/ListLine';
import FreeListPostingBtn from '../MoleCules/FreeListPostingBtn';
import Router from 'next/router';

const ListStyle = styled.div`
  table {
    width: 640px;
    @media screen and (max-width: 700px) {
      width: 279px;
    }
    .top_list_line {
      border-top: 1px solid #20c997;
    }
    td {
      max-width: 428px;
    }
    @media screen and (max-width: 700px) {
      td {
        max-width: 120px;
      }
    }
  }
`;

export default function FreeListPostingList({ freeBoard }) {
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
                  Router.push(
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
