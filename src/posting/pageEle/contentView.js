import styled from 'styled-components';

const ContentStyle = styled.div`
  padding: 20px 0 30px 0;
  color: #525252;
`;

export default function ContentView({ nowPostingEleObj }) {
  return <ContentStyle>{nowPostingEleObj.content}</ContentStyle>;
}
