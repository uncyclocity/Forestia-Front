import { useState } from 'react';
import styled from 'styled-components';
import { BtnFreePhotoSwitch } from '../Atoms/Button/BtnFreePhotoSwitch';
import BtnPosting from '../Atoms/Button/BtnPosting';
import BtnDisabledPosting from '../Atoms/Button/BtnDisabledPosting';
import { useDispatch, useReducerState } from '../Contexts/context';
import LinBetweenTitleContent from '../Atoms/Line/LinBetweenTitleContent';
import IptTitle from '../Atoms/Input/IptTitle';
import IptContent from '../Atoms/Input/IptContent';
import PostingPostImgUploadArea from '../MoleCules/PostingPostImgUploadArea';
import { postPosting } from '../../utils/updateFunc/posting/postPosting';

const LayoutStyle = styled.div`
  margin-bottom: 15px;
`;

const getImagesUrlArr = (files) => {
  const imagesUrlArr = [];
  for (let file of files) {
    const imageUrl = window.URL.createObjectURL(file);
    imagesUrlArr.push(imageUrl);
  }
  return imagesUrlArr;
};

export default function PostingPostPage() {
  const state = useReducerState();
  const postCnt = state.postCnt;
  const userObj = state.user;
  const dispatch = useDispatch();
  const [postingEle, setPostingEle] = useState({
    title: '',
    content: '',
    imagesUrlArr: [],
  });
  const [selBoard, setSelBoard] = useState('free');
  const [files, setFiles] = useState([]);

  return (
    <>
      <BtnFreePhotoSwitch selBoard={selBoard} setSelBoard={setSelBoard} />
      <LayoutStyle>
        <IptTitle
          onChange={(e) =>
            setPostingEle({ ...postingEle, title: e.target.value })
          }
          value={postingEle.title}
        />
        <LinBetweenTitleContent />
        <IptContent
          onChange={(e) =>
            setPostingEle({ ...postingEle, content: e.target.value })
          }
          value={postingEle.content}
        />
        <PostingPostImgUploadArea
          onChange={(e) => {
            setFiles(e.target.files);
            setPostingEle({
              ...postingEle,
              imagesUrlArr: getImagesUrlArr(e.target.files),
            });
          }}
          postingEle={postingEle}
        />
        {postCnt ? (
          <BtnDisabledPosting text="로딩중.." />
        ) : (
          <BtnPosting
            text="업로드"
            onClick={() => {
              if (postingEle.content && postingEle.title) {
                if (
                  selBoard === 'photo' &&
                  postingEle.imagesUrlArr.length <= 0
                ) {
                  alert('짤게는 이미지 업로드가 필수입니다.');
                } else {
                  postPosting({
                    selBoard,
                    title: postingEle.title,
                    content: postingEle.content,
                    imagesArr: files,
                    dispatch,
                    userObj,
                    postCnt,
                  });
                }
              } else {
                alert('제목 및 내용을 입력하세요');
              }
            }}
          />
        )}
      </LayoutStyle>
    </>
  );
}
