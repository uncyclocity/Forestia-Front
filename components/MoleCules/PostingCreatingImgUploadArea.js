import styled from 'styled-components';
import BtnImgUpload from '../Atoms/Button/BtnImgUpload';
import ImgUploadedImagePreview from '../Atoms/Image/ImgUploadedImagePreview';
import TxtImgUpload from '../Atoms/Text/TxtImgUpload';

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 10px;

  .uploadimg_btn_area {
    display: flex;
    flex-direction: column;
  }

  .uploadedimg_list {
    display: flex;
    overflow-x: scroll;
    scrollbar-width: thin;
    border-radius: 3px;
  }
`;

export default function PostingCreatingImgUploadArea({ onChange, postingEle }) {
  return (
    <Styles>
      <div className="uploadimg_btn_area">
        <TxtImgUpload />
        <BtnImgUpload onChange={onChange} />
      </div>
      <div className="uploadedimg_list">
        {postingEle.imagesUrlArr.length > 0 &&
          postingEle.imagesUrlArr.map((imageUrl, index) => {
            return <ImgUploadedImagePreview key={index} imageUrl={imageUrl} />;
          })}
      </div>
    </Styles>
  );
}
