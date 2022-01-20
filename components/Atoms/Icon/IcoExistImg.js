import { FiImage } from 'react-icons/fi';
import styled from 'styled-components';

// IcoExistImg
// 분류 : 아이콘
// 용도 : 포스팅 리스트에서 이미지가 포함 된 포스팅에 표시됨

const Styles = styled.div`
  margin-left: 3px;
  color: #20c997;
`;

export default function IcoExistImg({ isImgExist }) {
  return <Styles>{isImgExist && <FiImage />}</Styles>;
}
