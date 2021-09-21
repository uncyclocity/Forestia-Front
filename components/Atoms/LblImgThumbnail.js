import styled from 'styled-components';

// LblImgThumbnail
// 분류 : 레이블
// 용도 : 썸네일로 쓰이는 이미지가 표시 됨

export default function LblImgThumbnail({ imageUrl }) {
  const Styles = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #e9ecef;
    border-radius: 5px;
    width: 213px;
    height: 120px;
    overflow: hidden;
    background: #f4f4f4;

    img {
      max-width: initial;
      height: 120px;
    }
  `;

  return (
    <Styles>
      <img src={imageUrl} alt={imageUrl} height="44" />
    </Styles>
  );
}
