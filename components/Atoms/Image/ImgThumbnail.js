import styled from 'styled-components';

// ImgThumbnail
// 분류 : 이미지
// 용도 : 썸네일로 쓰이는 이미지

const Styles = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #e9ecef;
  border-radius: 5px;

  width: 220px;
  height: 120px;

  overflow: hidden;
  background: #f4f4f4;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (max-width: 700px) {
    width: 140px;
    height: 80px;
    img {
      height: 80px;
    }
  }
`;

export default function ImgThumbnail({ imageUrl }) {
  return <Styles imageUrl={imageUrl} />;
}
