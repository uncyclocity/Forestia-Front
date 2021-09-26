import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';
import { FiImage } from 'react-icons/fi';
import IcoListEmpty from '../../../../components/Atoms/Icon/IcoListEmpty';
import TxtListEmpty from '../../../../components/Atoms/Text/TxtListEmpty';
import TxtPostingTitle from '../../../../components/Atoms/Text/TxtPostingTitle';
import TxtCommentAmount4List from '../../../../components/Atoms/Text/TxtCommentAmount4List';
import TxtPostingAuthor4List from '../../../../components/Atoms/Text/TxtPostingAuthor4List';
import TxtPostingDate4List from '../../../../components/Atoms/Text/TxtPostingDate4List';
import TxtFreeGridTopName from '../../../../components/Atoms/Text/TxtFreeGridTopName';
import TxtFreeGridTopAuthor from '../../../../components/Atoms/Text/TxtFreeGridTopAuthor';
import TxtFreeGridTopDate from '../../../../components/Atoms/Text/TxtFreeGridTopDate';

const ListStyle = styled.div`
  .content_list {
    ul {
      padding-left: 0;
      li {
        list-style-type: none;
        margin-top: 10px;

        .top {
          height: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: center;
          font-weight: bold;
          color: #828c99;
          border-bottom: 1px solid #20c997;
        }

        .posting_btn {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid #e9ecef;

          .name_and_postingtype {
            display: flex;
            flex-direction: row;

            .posting_name {
              max-width: 400px;
              overflow-x: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .posting_isImageExist {
              margin-left: 3px;
              color: #20c997;
            }
          }

          .posting_author_prototype {
            margin-left: auto;
          }

          .posting_date_prototype {
            margin-left: 8%;
          }

          &:hover {
            transition: 0.15s all ease-in;
            color: #20c997;
          }

          &:not(:hover) {
            transition: 0.15s all ease-in;
            color: #828c99;
          }
        }
      }
    }

    .list_empty {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin: 20px 0;
      color: #babfc7;

      .empty_icon {
        width: 80px;
        height: 80px;
        font-size: 80px;
      }

      .empty_text {
        margin-top: 20px;
        font-size: 20px;
      }
    }
  }
`;

export default function FreeListPostingList({ freeBoard }) {
  const dispatch = useDispatch();

  return (
    <ListStyle>
      <div className="content_list">
        {freeBoard.length > 0 ? (
          <ul>
            <li>
              <div className="top">
                <TxtFreeGridTopName />
                <TxtFreeGridTopAuthor />
                <TxtFreeGridTopDate />
              </div>
            </li>
            {freeBoard.map((posting, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/posting?board_type=free&post_id=${posting.id}`,
                      )
                    }
                  >
                    <div className="posting_btn">
                      <div className="name_and_postingtype">
                        <TxtPostingTitle title={posting.title} />
                        <div className="posting_isImageExist">
                          {posting.imagesUrl.length > 0 && <FiImage />}
                        </div>
                      </div>
                      {posting.comments.length > 0 && (
                        <TxtCommentAmount4List
                          amount={posting.imagesUrl.length}
                        />
                      )}
                      <div className="posting_author_prototype">
                        <TxtPostingAuthor4List author={posting.author} />
                      </div>
                      <div className="posting_date_prototype">
                        <TxtPostingDate4List date={posting.date} />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="list_empty">
            <IcoListEmpty />
            <TxtListEmpty />
          </div>
        )}
      </div>
    </ListStyle>
  );
}
