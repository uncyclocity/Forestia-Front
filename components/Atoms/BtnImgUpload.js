import styled from 'styled-components';
import getImagesUrlArr from '../../src/board/update_posting.creating/etcFunc/getImagesUrlArr';

// BtnImgUpload
// 분류 : 버튼
// 용도 : 포스팅 작성 페이지에서 이미지를 업로드하는데 쓰이는 버튼

const Styles = styled.div`
  width: 300px;
`;

export default function BtnImgUpload({ onChange }) {
  return (
    <Styles>
      <input type="file" accept="image/*" onChange={onChange} multiple />
    </Styles>
  );
}
