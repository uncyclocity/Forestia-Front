import { useRef, useState } from 'react';
import styled from 'styled-components';
import { BtnFreePhotoSwitch } from '../../../../components/Atoms/BtnFreePhotoSwitch';
import { BtnPosting } from '../../../../components/Atoms/BtnPosting';
import { useDispatch, useReducerState } from '../../../common/context';
import getImagesUrlArr from '../etcFunc/getImagesUrlArr';
import letsDoUploadPosting from '../etcFunc/letsDoUploadPosting';

const ContentInputStyle = styled.div`
  flex-direction: column;
  margin-bottom: 15px;

  .content_title_input_box {
    width: 640px;
    font-size: 25px;
    font-weight: bold;
    color: #464646;
    border: none;
    outline: none;
    &::placeholder {
      color: #aaaaaa;
    }
  }

  .title_content_line {
    width: 50px;
    border: 2px solid #20c997;
    margin: 20px 0 20px 2px;
  }

  .content_input_box {
    width: 640px;
    height: 300px;

    margin-bottom: 10px;

    border: none;
    border-bottom: 1px solid #e9ecef;

    outline: none;

    font-size: 17px;
    font-family: inherit;

    &::placeholder {
      color: #aaaaaa;
      font-style: italic;
    }
  }

  .upload_image_area {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9ecef;
    margin-bottom: 10px;

    .uploadimg_btn_area {
      .uploadimg_text {
        color: #20c997;
        font-weight: bold;
      }
    }

    .uploadedimg_list {
      display: flex;
      overflow-x: scroll;
      scrollbar-width: thin;
      border-radius: 3px;

      img {
        &:not(:last-child) {
          margin-right: 7px;
        }
        border-radius: 3px;
        border: 1px solid #d1d8de;
        margin-bottom: 3px;
      }
    }
  }
`;

export default function PostingContentInput() {
  const postCnt = useReducerState().postCnt;
  const dispatch = useDispatch();
  const [postingEle, setPostingEle] = useState({
    title: '',
    content: '',
    imagesUrlArr: [],
  });
  const [selBoard, setSelBoard] = useState('free');
  const images = useRef(null);

  return (
    <>
      <BtnFreePhotoSwitch selBoard={selBoard} setSelBoard={setSelBoard} />
      <ContentInputStyle>
        <input
          type="text"
          className="content_title_input_box"
          placeholder="제목을 입력하세요"
          value={postingEle.title}
          onChange={(e) =>
            setPostingEle({ ...postingEle, title: e.target.value })
          }
        />
        <hr className="title_content_line" align="left" />
        <textarea
          className="content_input_box"
          style={{ resize: 'none' }}
          placeholder="내용을 입력하세요"
          value={postingEle.content}
          onChange={(e) =>
            setPostingEle({ ...postingEle, content: e.target.value })
          }
        />
        <div className="upload_image_area">
          <div className="uploadimg_btn_area">
            <div className="uploadimg_text">이미지 업로드</div>
            <input
              type="file"
              ref={images}
              accept="image/*"
              onChange={() =>
                setPostingEle({
                  ...postingEle,
                  imagesUrlArr: getImagesUrlArr(images.current.files),
                })
              }
              multiple
            />
          </div>
          <div className="uploadedimg_list">
            {postingEle.imagesUrlArr.length > 0 &&
              postingEle.imagesUrlArr.map((imageUrl, index) => {
                return (
                  <img src={imageUrl} key={index} alt={index} height="44" />
                );
              })}
          </div>
        </div>
        <div
          onClick={() => {
            if (!postCnt) {
              if (postingEle.content && postingEle.title) {
                if (
                  selBoard === 'photo' &&
                  postingEle.imagesUrlArr.length <= 0
                ) {
                  alert('짤게는 이미지 업로드가 필수입니다.');
                } else {
                  letsDoUploadPosting(
                    selBoard,
                    postingEle.title,
                    postingEle.content,
                    images.current.files,
                    dispatch,
                  );
                }
              } else {
                alert('제목 및 내용을 입력하세요');
              }
            }
          }}
        >
          <BtnPosting>업로드</BtnPosting>
        </div>
      </ContentInputStyle>
    </>
  );
}
