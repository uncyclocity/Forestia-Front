import { useRef, useState } from 'react';
import styled from 'styled-components';
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

  .content_post_btn {
    background: #20c997;
    color: white;

    width: 80px;
    height: 35px;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;

    margin-left: 87%;

    cursor: pointer;

    .post_icon {
      height: 23px;
      font-size: 20px;
      margin-right: 5px;
    }

    .post_text {
      font-size: 18px;
      font-weight: bold;
    }

    &:hover {
      background: #37dfad;
    }
  }
`;

export default function PostingContentInput({ selBoard }) {
  const title = useRef(null);
  const content = useRef(null);
  const images = useRef({ files: [] });
  const [imagesUrlArr, setImagesUrlArr] = useState([]);
  const state = useReducerState();
  const dispatch = useDispatch();

  const postCnt = state.postCnt;

  return (
    <ContentInputStyle>
      <input
        type="text"
        className="content_title_input_box"
        placeholder="제목을 입력하세요"
        ref={title}
      />
      <hr className="title_content_line" align="left" />
      <textarea
        className="content_input_box"
        style={{ resize: 'none' }}
        placeholder="내용을 입력하세요"
        ref={content}
      />
      <div className="upload_image_area">
        <div className="uploadimg_btn_area">
          <div className="uploadimg_text">이미지 업로드</div>
          <input
            type="file"
            ref={images}
            accept="image/*"
            onChange={() =>
              setImagesUrlArr(getImagesUrlArr(images.current.files))
            }
            multiple
          />
        </div>
        <div className="uploadedimg_list">
          {imagesUrlArr.length > 0 &&
            imagesUrlArr.map((imageUrl, index) => {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} key={index} alt={index} height="44" />
              );
            })}
        </div>
      </div>
      <div
        className="content_post_btn"
        onClick={() => {
          if (!postCnt) {
            content.current.value && title.current.value
              ? letsDoUploadPosting(selBoard, title, content, images, dispatch)
              : alert('제목 및 내용을 입력하세요');
          }
        }}
      >
        <div className="post_text">업로드</div>
      </div>
    </ContentInputStyle>
  );
}
