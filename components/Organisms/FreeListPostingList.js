import styled from 'styled-components';
import ListEmpty from '../MoleCules/ListEmpty';
import FreeListTableTop from '../MoleCules/FreeListTableTop';
import ListLine from '../MoleCules/ListLine';
import FreeListPostingBtn from '../MoleCules/FreeListPostingBtn';
import Router from 'next/router';

const ListStyle = styled.div`
  margin: 0 auto;
  table {
    width: 100%;
    .top_list_line {
      border-top: 1px solid #20c997;
    }
    td {
      max-width: 428px;
    }
  }

  @media screen and (max-width: 700px) {
    table {
      td {
        max-width: 149px;
      }
    }
  }
`;

export default function FreeListPostingList({ freeBoard, page }) {
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
                    `/board/posting?boardtype=free&postid=${posting.id}&page=${page}`,
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
