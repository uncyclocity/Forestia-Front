import { unmountAnimation } from '../../../common/animationController';
import { useDispatch } from '../../../common/context';
import styled from 'styled-components';
import ImgThumbnail from '../../../../components/Atoms/Image/ImgThumbnail';
import TxtPostingTitle from '../../../../components/Atoms/Text/TxtPostingTitle';
import TxtCommentAmount4List from '../../../../components/Atoms/Text/TxtCommentAmount4List';
import TxtPostingAuthor4List from '../../../../components/Atoms/Text/TxtPostingAuthor4List';
import TxtPostingDate4List from '../../../../components/Atoms/Text/TxtPostingDate4List';
import IcoListEmpty from '../../../../components/Atoms/Icon/IcoListEmpty';
import TxtListEmpty from '../../../../components/Atoms/Text/TxtListEmpty';

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
          margin-left: auto;
        }
      }

      .date_and_author {
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 13px;
        .posting_date_prototype {
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
                <ImgThumbnail imageUrl={posting.imagesUrl[0]} />
                <div className="name_and_comment">
                  <TxtPostingTitle title={posting.title} />
                  <div className="posting_comment_amount">
                    <TxtCommentAmount4List amount={posting.imagesUrl.length} />
                  </div>
                </div>
                <div className="date_and_author">
                  <TxtPostingAuthor4List author={posting.author} />
                  <div className="posting_date_prototype">
                    <TxtPostingDate4List date={posting.date} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="list_empty">
          <IcoListEmpty />
          <TxtListEmpty />
        </div>
      )}
    </ListStyle>
  );
}
