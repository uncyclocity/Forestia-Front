import styled from 'styled-components';

// ImgUploadedImagePreview
// 분류 : 이미지
// 용도 : 포스팅 작성 페이지에서 업로드한 이미지들의 미리 보기

const Styles = styled.div`
  &:not(:last-child) {
    margin-right: 7px;
  }
  border-radius: 3px;
  border: 1px solid #d1d8de;
  margin-bottom: 3px;

  background: #f4f4f4;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  height: 40px;
  width: 55px;
`;

export default function ImgUploadedImagePreview({ imageUrl }) {
  return <Styles imageUrl={imageUrl} />;
}
