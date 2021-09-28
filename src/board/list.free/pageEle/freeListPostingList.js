import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';
import IcoListEmpty from '../../../../components/Atoms/Icon/IcoListEmpty';
import TxtListEmpty from '../../../../components/Atoms/Text/TxtListEmpty';
import TxtPostingTitle from '../../../../components/Atoms/Text/TxtPostingTitle';
import TxtCommentAmount4List from '../../../../components/Atoms/Text/TxtCommentAmount4List';
import TxtPostingAuthor4List from '../../../../components/Atoms/Text/TxtPostingAuthor4List';
import TxtPostingDate4List from '../../../../components/Atoms/Text/TxtPostingDate4List';
import TxtFreeGridTopName from '../../../../components/Atoms/Text/TxtFreeGridTopName';
import TxtFreeGridTopAuthor from '../../../../components/Atoms/Text/TxtFreeGridTopAuthor';
import TxtFreeGridTopDate from '../../../../components/Atoms/Text/TxtFreeGridTopDate';
import IcoImagePosting from '../../../../components/Atoms/Icon/IcoImagePosting';

const ListStyle = styled.div`
  table {
    width: 640px;

    .posting_title_area {
      display: flex;
      flex-direction: row;
    }

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
          <tr className="top">
            <td>
              <TxtFreeGridTopName />
            </td>
            <td>
              <TxtFreeGridTopAuthor />
            </td>
            <td>
              <TxtFreeGridTopDate />
            </td>
          </tr>
          <td colSpan="3" className="top_list_line" />
          {freeBoard.map((posting, index) => {
            return (
              <tr
                key={index}
                onClick={() =>
                  unmountAnimation(
                    0,
                    dispatch,
                    `/board/posting?board_type=free&post_id=${posting.id}`,
                  )
                }
              >
                <td className="posting_title_area">
                  <TxtPostingTitle title={posting.title} />
                  {posting.imagesUrl.length > 0 && <IcoImagePosting />}
                  {posting.comments.length > 0 && (
                    <TxtCommentAmount4List amount={posting.imagesUrl.length} />
                  )}
                </td>
                <td>
                  <TxtPostingAuthor4List author={posting.author} />
                </td>
                <td>
                  <TxtPostingDate4List date={posting.date} />
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <div className="list_empty">
          <IcoListEmpty />
          <TxtListEmpty />
        </div>
      )}
    </ListStyle>
  );
}
