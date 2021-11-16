import Router from 'next/router';
import styled from 'styled-components';

// ImgView
// 분류 : 이미지
// 용도 : 포스팅 페이지에서 이미지 띄우기

const Styles = styled.div`
  img {
    border-radius: 5px;
    border: 1px solid #e9ecef;
    max-width: 640px;

    @media screen and (max-width: 700px) {
      max-width: 315px;
    }
  }
`;

export default function ImgView({ imageUrl }) {
  return (
    <Styles onClick={() => Router.push(imageUrl)}>
      <img src={imageUrl} alt={imageUrl} />
    </Styles>
  );
}
