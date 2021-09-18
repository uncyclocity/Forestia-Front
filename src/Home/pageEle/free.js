import { useRef, useState } from 'react';
import { AiOutlineCloud, AiOutlineSmile } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { FiImage } from 'react-icons/fi';
import { unmountAnimation } from '../../common/animationController';
import { useDispatch } from '../../common/context';
import setTop3 from '../etcFunc/setTop3';
import styled from 'styled-components';
import { FaRegCommentAlt } from 'react-icons/fa';

const FreeBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #828c99;
  float: left;

  .board_title {
    width: 100%;
    color: #20c997;
    padding: 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
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
    width: 100%;
    height: 105px;
    ul {
      padding: 5px 20px;
      margin: 0px;
      li {
        width: 300px;
        list-style-type: none;

        .posting_btn {
          cursor: pointer;
          display: flex;
          flex-direction: row;

          .posting_isImageExist {
            margin-left: 3px;
            color: #20c997;
          }

          .posting_name {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .comment_amount_area {
            display: flex;
            flex-direction: row;
            color: #20c997;
            height: 14px;
            margin-left: auto;

            .icon {
              font-size: 12px;
              margin: 0 3px;
            }

            .amount {
              width: 13px;
              font-size: 12px;
            }
          }
        }

        &:not(:first-child) {
          margin-top: 10px;
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
      color: #babfc7;

      .empty_icon {
        width: 60px;
        height: 60px;
        font-size: 60px;
      }

      .empty_text {
        margin-top: 5px;
        font-size: 18px;
      }
    }
  }
`;

export default function FreeBox({ freeBoard }) {
  const dispatch = useDispatch();
  const bak = useRef([]);
  const [freeTop3] = useState(setTop3(freeBoard, bak));

  return (
    <FreeBoxStyle>
      <div className="board_title">
        <div className="board_icon">
          <AiOutlineCloud />
        </div>
        <div className="board_name">자게</div>
        <div
          className="goto_board"
          onClick={() =>
            unmountAnimation(0, dispatch, `/board/board_list/free?page=1`)
          }
        >
          <BiChevronRight />
        </div>
      </div>

      <div className="content_list">
        {freeTop3.length > 0 ? (
          <ul>
            {freeTop3.map((post, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/posting?board_type=free&post_id=${post.id}`,
                      )
                    }
                    className="posting_btn"
                  >
                    <div className="posting_name">{post.title}</div>
                    <div className="posting_isImageExist">
                      {post.imagesUrl.length > 0 && <FiImage />}
                    </div>
                    <div className="comment_amount_area">
                      <div className="icon">
                        <FaRegCommentAlt />
                      </div>
                      <div className="amount">{post.comments.length}</div>
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
    </FreeBoxStyle>
  );
}
