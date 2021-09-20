import styled from 'styled-components';

export default function TxtPostingTitle({ children }) {
  const Styles = styled.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  return <Styles>{children}</Styles>;
}
