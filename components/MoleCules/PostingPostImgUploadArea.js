import styled, { css } from 'styled-components';
import BtnImgUpload from '../Atoms/Button/BtnImgUpload';
import ImgUploadedImagePreview from '../Atoms/Image/ImgUploadedImagePreview';
import TxtImgUpload from '../Atoms/Text/TxtImgUpload';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ imagesUrlArrLen }) =>
    imagesUrlArrLen > 0
      ? css`
          height: 115px;
        `
      : css`
          height: 60px;
        `}
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 10px;

  .uploadimg_btn_area {
    display: flex;
    flex-direction: column;
  }

  .uploadedimg_list {
    width: 300px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: thin;
    border-radius: 3px;
    margin: 9px 0;
  }
`;

export default function PostingPostImgUploadArea({ onChange, postingEle }) {
  return (
    <Styles imagesUrlArrLen={postingEle.imagesUrlArr.length}>
      <div className="uploadimg_btn_area">
        <TxtImgUpload />
        <BtnImgUpload onChange={onChange} />
      </div>
      {postingEle.imagesUrlArr.length > 0 && (
        <div className="uploadedimg_list">
          {postingEle.imagesUrlArr.length > 0 &&
            postingEle.imagesUrlArr.map((imageUrl, index) => {
              return (
                <ImgUploadedImagePreview key={index} imageUrl={imageUrl} />
              );
            })}
        </div>
      )}
    </Styles>
  );
}
