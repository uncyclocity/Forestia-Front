import styled from 'styled-components';

const Styles = styled.div`
  cursor: pointer;

  .name_and_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    .comment_amount {
      margin-left: auto;
    }
  }
`;

export default function HomePhotoPostingButton({ onClick, children }) {
  return <Styles onClick={onClick}>{children}</Styles>;
}
