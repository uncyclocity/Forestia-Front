import ImgView from '../Atoms/Image/ImgView';

export default function PostingImageView({ nowPostingEleObj }) {
  const imagesUrl = nowPostingEleObj.imagesUrl;
  const { NEXT_PUBLIC_IMAGE_URL } = process.env;

  return (
    <div className="imageview_area">
      {imagesUrl &&
        imagesUrl.map((imageUrl, index) => {
          return (
            <ImgView imageUrl={NEXT_PUBLIC_IMAGE_URL + imageUrl} key={index} />
          );
        })}
    </div>
  );
}
