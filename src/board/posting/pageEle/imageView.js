import ImgView from '../../../../components/Atoms/ImgView';

export default function ImageView({ nowPostingEleObj }) {
  const imagesUrl = nowPostingEleObj.imagesUrl;

  return (
    <div className="imageview_area">
      {imagesUrl &&
        imagesUrl.map((imageUrl, index) => {
          return <ImgView imageUrl={imageUrl} key={index} />;
        })}
    </div>
  );
}
