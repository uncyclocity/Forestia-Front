import { FiImage } from 'react-icons/fi';
import styled from 'styled-components';

// IcoImagePosting
// 분류 : 아이콘
// 용도 : 자게 리스트에서 이미지가 있는 포스팅임을 알리는 아이콘

const Styles = styled.div`
  margin-left: 3px;
  color: #20c997;
`;

export default function IcoImagePosting() {
  return (
    <Styles>
      <FiImage />
    </Styles>
  );
}
