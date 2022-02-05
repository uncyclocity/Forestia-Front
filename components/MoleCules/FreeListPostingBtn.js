import styled from 'styled-components';
import getCommentLen from '../../utils/getCommentLen';
import IcoImagePosting from '../Atoms/Icon/IcoImagePosting';
import TxtCommentAmount4List from '../Atoms/Text/TxtCommentAmount4List';
import TxtPostingAuthor4List from '../Atoms/Text/TxtPostingAuthor4List';
import TxtPostingDate4List from '../Atoms/Text/TxtPostingDate4List';
import TxtPostingTitle from '../Atoms/Text/TxtPostingTitle';

const LayoutStyle = styled.tr`
  cursor: pointer;

  &:hover {
    transition: 0.15s all ease-in;
    color: #20c997;
  }

  &:not(:hover) {
    transition: 0.15s all ease-in;
    color: #828c99;
  }
`;

const PostingTitleStyle = styled.td`
  display: flex;
  flex-direction: row;
`;

export default function FreeListPostingBtn({ posting, onClick }) {
  const commentAmount = getCommentLen(posting);

  return (
    <LayoutStyle onClick={onClick}>
      <PostingTitleStyle>
        <TxtPostingTitle title={posting.title} />
        {posting.imagesUrl.length > 0 && <IcoImagePosting />}
        {commentAmount > 0 && <TxtCommentAmount4List amount={commentAmount} />}
      </PostingTitleStyle>
      <td>
        <TxtPostingAuthor4List author={posting.author} />
      </td>
      <td>
        <TxtPostingDate4List date={posting.date} />
      </td>
    </LayoutStyle>
  );
}
