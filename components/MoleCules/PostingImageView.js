import { useEffect } from 'react';
import ImgView from '../Atoms/Image/ImgView';

export default function PostingImageView({ nowPostingEleObj }) {
  const imagesUrl = nowPostingEleObj.imagesUrl;

  useEffect(() => {
    console.log(process.env);
  });

  return (
    <div className="imageview_area">
      {imagesUrl &&
        imagesUrl.map((imageUrl, index) => {
          return (
            <ImgView
              imageUrl={process.env.NEXT_PUBLIC_IMAGE_URL + imageUrl}
              key={index}
            />
          );
        })}
    </div>
  );
}
