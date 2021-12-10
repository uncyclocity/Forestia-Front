import styled from 'styled-components';

// TxtModalTitle
// 분류 : 텍스트
// 용도 : 모달창 타이틀

const Styles = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export default function TxtModalTitle({ title }) {
  return <Styles>{title}</Styles>;
}
