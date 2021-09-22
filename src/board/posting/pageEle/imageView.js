import styled from 'styled-components';

const ImageStyle = styled.div`
  img {
    border-radius: 5px;
    border: 1px solid #e9ecef;
    max-width: 640px;
  }
`;

export default function ImageView({ nowPostingEleObj }) {
  const imagesUrl = nowPostingEleObj.imagesUrl;

  return (
    <div className="imageview_area">
      {imagesUrl &&
        imagesUrl.map((imageUrl, index) => {
          return (
            <ImageStyle key={index}>
              <img src={imageUrl} alt={index} />
            </ImageStyle>
          );
        })}
    </div>
  );
}
