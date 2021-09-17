import { AiOutlineSmile } from 'react-icons/ai';
import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';

const ListStyle = styled.div`
  margin: 15px 0 10px 0;
  max-width: 640px;

  .posting_list {
    width: 650px;

    .photo_posting {
      display: inline-block;
      cursor: pointer;
      margin-bottom: 15px;

      .posting_thumbnail {
        display: flex;
        justify-content: center;
        border: 1px solid #e9ecef;
        border-radius: 5px;
        width: 205px;
        height: 120px;
        overflow: hidden;
        background: #f4f4f4;

        img {
          max-width: initial;
          height: 120px;
        }
      }

      .name_and_comment {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0 5px 0;
        border-bottom: 1px solid #e9ecef;
        width: 100%;

        .posting_name {
          width: 185px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .posting_comment_amount {
          color: #20c997;
          font-size: 12px;
        }
      }

      .date_and_author {
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 13px;
        .posting_date {
          margin-left: auto;
        }
      }

      &:not(:last-child) {
        margin-right: 10px;
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
`;

export default function PhotoListPostingList({ photoBoard }) {
  const dispatch = useDispatch();

  return (
    <ListStyle>
      {photoBoard.length > 0 ? (
        <div className="posting_list">
          {photoBoard.map((posting, index) => {
            return (
              <div
                onClick={() =>
                  unmountAnimation(
                    0,
                    dispatch,
                    `/board/posting?board_type=photo&post_id=${posting.id}`,
                  )
                }
                className="photo_posting"
                key={index}
              >
                <div className="posting_thumbnail">
                  <img src={posting.imagesUrl[0]} alt={index} height="44" />
                </div>
                <div className="name_and_comment">
                  <div className="posting_name">{posting.title}</div>
                  <div className="posting_comment_amount">
                    [{posting.comments.length}]
                  </div>
                </div>
                <div className="date_and_author">
                  <div className="posting_author">{posting.author}</div>
                  <div className="posting_date">
                    {posting.date.substring(5, 16)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="list_empty">
          <div className="empty_icon">
            <AiOutlineSmile />
          </div>
          <div className="empty_text">아직 게시판이 비어 있어요</div>
        </div>
      )}
    </ListStyle>
  );
}
