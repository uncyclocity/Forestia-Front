import ImgView from '../Atoms/Image/ImgView';

export default function PostingImageView({ nowPostingEleObj }) {
  const imagesUrl = nowPostingEleObj.imagesUrl;

  return (
    <div className="imageview_area">
      {imagesUrl &&
        imagesUrl.map((imageUrl, index) => {
          return (
            <ImgView
              imageUrl={'https://forestia.herokuapp.com' + imageUrl}
              key={index}
            />
          );
        })}
    </div>
  );
}
