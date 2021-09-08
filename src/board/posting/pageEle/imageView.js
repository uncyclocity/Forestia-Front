import Image from 'next/image';

export default function ImageView({ nowPostingEleObj }) {
  const imagesUrl = nowPostingEleObj.imagesUrl;

  return (
    <div className="imageview_area">
      {imagesUrl.map((imageUrl, index) => {
        return (
          <div className="image" key={index}>
            <Image src={imageUrl} alt={index} width={100} height={100} />
          </div>
        );
      })}
    </div>
  );
}
