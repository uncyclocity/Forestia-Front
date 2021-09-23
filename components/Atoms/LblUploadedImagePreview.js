import styled from 'styled-components';

// LblUploadedImagePreview
// 분류 : 레이블
// 용도 : 포스팅 작성 페이지에서 업로드한 이미지들의 미리 보기

export default function LblUploadedImagePreview({ imageUrl }) {
  const Styles = styled.div`
    &:not(:last-child) {
      margin-right: 7px;
    }
    border-radius: 3px;
    border: 1px solid #d1d8de;
    margin-bottom: 3px;
  `;

  return (
    <Styles>
      <img src={imageUrl} alt={imageUrl} height="44" />
    </Styles>
  );
}
