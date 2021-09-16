import { AiOutlineSmile } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';

const ListStyle = styled.div`
  margin: 10px 0 10px 0;
  max-width: 640px;

  .posting_list {
    display: flex;
    flex-direction: row;
    overflow: hidden;

    .photo_posting {
      cursor: pointer;

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

      .name_and_content {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0 0 2px;
        width: 100%;

        .posting_name {
          width: 100%;
        }

        .comment_amount_area {
          display: flex;
          flex-direction: row;
          color: #20c997;

          .icon {
            font-size: 12px;
            margin-right: 3px;
          }

          .amount {
            font-size: 12px;
          }
        }
      }

      a {
        display: block;
        overflow: hidden;
        cursor: pointer;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:not(:first-child) {
        margin-left: 10px;
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
  const BoardLenDiv3Remain = photoBoard.length % 3;
  const photo3Block =
    BoardLenDiv3Remain > 0
      ? parseInt(photoBoard.length / 3) + 1
      : parseInt(photoBoard.length / 3);

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
                <div className="name_and_content">
                  <div className="posting_name">{posting.title}</div>
                  <div className="comment_amount_area">
                    <div className="icon">
                      <FaRegCommentAlt />
                    </div>
                    <div className="amount">{posting.comments.length}</div>
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
