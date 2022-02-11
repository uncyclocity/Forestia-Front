import styled from 'styled-components';
import getCommentLen from '../../utils/getCommentLen';
import ImgThumbnail from '../Atoms/Image/ImgThumbnail';
import TxtCommentAmount4List from '../Atoms/Text/TxtCommentAmount4List';
import TxtPostingAuthor4List from '../Atoms/Text/TxtPostingAuthor4List';
import TxtPostingDate4List from '../Atoms/Text/TxtPostingDate4List';
import TxtPostingTitle from '../Atoms/Text/TxtPostingTitle';

const NameAndCommentAreaStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 5px 0;
  border-bottom: 1px solid #e9ecef;
  width: 100%;

  .posting_comment_amount {
    margin-left: auto;
  }
`;

const DateAndAuthorAreaStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 13px;
  .posting_date_prototype {
    margin-left: auto;
  }
`;

const LayoutStyle = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 0 5px;
  margin-bottom: 15px;

  &:hover {
    transition: 0.15s all ease-in;
    color: #20c997;
  }

  &:not(:hover) {
    transition: 0.15s all ease-in;
    color: #828c99;
  }
`;

export default function PhotoListPostingBtn({ posting, onClick }) {
  const { NEXT_PUBLIC_IMAGE_URL } = process.env;
  const commentAmount = getCommentLen(posting);

  return (
    <LayoutStyle onClick={onClick}>
      <ImgThumbnail imageUrl={NEXT_PUBLIC_IMAGE_URL + posting.imagesUrl[0]} />
      <NameAndCommentAreaStyle>
        <TxtPostingTitle title={posting.title} />
        <div className="posting_comment_amount">
          <TxtCommentAmount4List amount={commentAmount} />
        </div>
      </NameAndCommentAreaStyle>
      <DateAndAuthorAreaStyle>
        <TxtPostingAuthor4List author={posting.author} />
        <div className="posting_date_prototype">
          <TxtPostingDate4List date={posting.date} />
        </div>
      </DateAndAuthorAreaStyle>
    </LayoutStyle>
  );
}
