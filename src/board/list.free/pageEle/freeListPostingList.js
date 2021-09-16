import { AiOutlineSmile } from 'react-icons/ai';
import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';
import { FiImage } from 'react-icons/fi';

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

          .posting_name {
            width: 400px;
          }

          .posting_author {
            margin: 0 10px 0 auto;
            width: 100px;
          }

          .posting_date {
            width: 75px;
          }
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

          .comment_amount {
            display: inline-block;
            width: 20px;
            font-size: 12px;
            color: #20c997;
            text-align: center;
          }

          .posting_author {
            width: 100px;
            margin-left: auto;
            font-size: 14px;
            display: block;
            overflow-x: hidden;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: 10px;
          }

          .posting_date {
            width: 75px;
            font-size: 14px;
            display: block;
            overflow-x: hidden;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
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
      flex-direction: column;
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
                <div className="posting_name">제목</div>
                <div className="posting_author">작성자</div>
                <div className="posting_date">작성일</div>
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
                        <div className="posting_name">{posting.title}</div>
                        <div className="posting_isImageExist">
                          {posting.imagesUrl.length > 0 && <FiImage />}
                        </div>
                      </div>
                      <div className="comment_amount">
                        {posting.comments.length > 0 &&
                          `[${posting.comments.length}]`}
                      </div>
                      <div className="posting_author">{posting.author}</div>
                      <div className="posting_date">
                        {posting.date.substring(5, 16)}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="list_empty">
            <div className="empty_icon">
              <AiOutlineSmile />
            </div>
            <div className="empty_text">아직 게시판이 비어 있어요</div>
          </div>
        )}
      </div>
    </ListStyle>
  );
}
