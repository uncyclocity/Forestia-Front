import ImgView from '../Atoms/Image/ImgView';

export default function PostingImageView({ nowPostingEleObj }) {
  const imagesUrl = nowPostingEleObj.imagesUrl;

  return (
    <div className="imageview_area">
      {imagesUrl &&
        imagesUrl.map((imageUrl, index) => {
          return (
            <ImgView
              imageUrl={
                'https://forestiaishere.s3.ap-northeast-2.amazonaws.com/' +
                imageUrl
              }
              key={index}
            />
          );
        })}
    </div>
  );
}
