import styled from 'styled-components';

const Styles = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;

  .comment_amount {
    margin-left: auto;
  }
`;

export default function HomeFreePostingButton({ onClick, children }) {
  return <Styles onClick={onClick}>{children}</Styles>;
}
