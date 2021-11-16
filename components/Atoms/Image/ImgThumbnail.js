import styled from 'styled-components';

// ImgThumbnail
// 분류 : 이미지
// 용도 : 썸네일로 쓰이는 이미지

const Styles = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #e9ecef;
  border-radius: 5px;

  width: 205px;
  height: 120px;

  img {
    max-width: initial;
    height: 120px;
  }

  overflow: hidden;
  background: #f4f4f4;

  @media screen and (max-width: 700px) {
    width: 140px;
    height: 80px;
    img {
      height: 80px;
    }
  }
`;

export default function ImgThumbnail({ imageUrl }) {
  return (
    <Styles>
      <img src={imageUrl} alt={imageUrl} />
    </Styles>
  );
}
