import { useRef, useState } from 'react';
import { AiOutlineCamera, AiOutlineSmile } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { unmountAnimation } from '../../common/animationController';
import { useDispatch } from '../../common/context';
import setTop3 from '../etcFunc/setTop3';
import styled from 'styled-components';

const PhotoBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #525252;
  float: left;

  .board_title {
    width: 100%;
    color: #20c997;
    padding: 15px;
    display: flex;
    align-items: center;

    font-size: 20px;

    .board_icon {
      height: 30px;
      font-size: 30px;
    }

    .board_name {
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
      width: 100%;
    }

    .goto_board {
      cursor: pointer;
      height: 20px;
      margin-left: 5px;
    }
  }

  .content_list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    ul {
      padding: 0px;
      margin: 5px 20px;
      li {
        float: left;
        list-style-type: none;

        .photo_posting {
          cursor: pointer;

          .posting_thumbnail {
            display: flex;
            justify-content: center;
            border: 1px solid #e9ecef;
            border-radius: 5px;
            width: 213px;
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
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 188px;
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
      flex-direction: row;
      margin: 20px 0;
      color: #babfc7;

      .empty_icon {
        width: 60px;
        height: 60px;
        font-size: 60px;
      }

      .empty_text {
        margin: 0 5px;
        font-size: 19px;
      }
    }
  }
`;

export default function PhotoBox({ photoBoard }) {
  const dispatch = useDispatch();
  const bak = useRef([]);
  const [photoTop3] = useState(setTop3(photoBoard, bak));

  return (
    <PhotoBoxStyle>
      <div className="board_title">
        <div className="board_icon">
          <AiOutlineCamera />
        </div>
        <div className="board_name">짤게</div>
        <div
          className="goto_board"
          onClick={() =>
            unmountAnimation(0, dispatch, `/board/board_list/photo?page=1`)
          }
        >
          <BiChevronRight />
        </div>
      </div>
      <div className="content_list">
        {photoTop3.length > 0 ? (
          <ul>
            {photoTop3.map((post, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/posting?board_type=photo&post_id=${post.id}`,
                      )
                    }
                  >
                    <div className="photo_posting">
                      <div className="posting_thumbnail">
                        <img src={post.imagesUrl[0]} alt={index} height="44" />
                      </div>
                      <div className="name_and_content">
                        <div className="posting_name">{post.title}</div>
                        <div className="comment_amount_area">
                          <div className="icon">
                            <FaRegCommentAlt />
                          </div>
                          <div className="amount">{post.comments.length}</div>
                        </div>
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
            <div className="empty_text">
              <div className="line">아직 게시판이</div>
              <div className="line">비어 있어요</div>
            </div>
          </div>
        )}
      </div>
    </PhotoBoxStyle>
  );
}
