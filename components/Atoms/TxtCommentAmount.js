import styled from 'styled-components';

export default function TxtCommentAmount({ children }) {
  const AmountStyle = styled.div`
    width: 13px;
    font-size: 12px;
  `;

  return <AmountStyle>{children}</AmountStyle>;
}
