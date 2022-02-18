import styled from 'styled-components';
import TxtPostingContentView from '../Atoms/Text/TxtPostingContentView';

const Styles = styled.div`
  margin: 15px 0 10px 0;
`;

export default function PostingContentView({ nowPostingEleObj }) {
  return (
    <Styles>
      <TxtPostingContentView content={nowPostingEleObj.content} />
    </Styles>
  );
}
