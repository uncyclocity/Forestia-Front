import { useState } from 'react';
import styled from 'styled-components';
import { BtnFreePhotoSwitch } from '../Atoms/Button/BtnFreePhotoSwitch';
import BtnPosting from '../Atoms/Button/BtnPosting';
import BtnDisabledPosting from '../Atoms/Button/BtnDisabledPosting';
import { useDispatch, useReducerState } from '../../src/context';
import LinBetweenTitleContent from '../Atoms/Line/LinBetweenTitleContent';
import IptTitle from '../Atoms/Input/IptTitle';
import IptContent from '../Atoms/Input/IptContent';
import PostingCreatingImgUploadArea from '../MoleCules/PostingCreatingImgUploadArea';
import { doImage, doPosting } from '../../src/doApi';

const letsDoUploadPosting = async (
  selBoard,
  title,
  content,
  imagesArr,
  dispatch,
  userObj,
) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });

  const boardLen = await doPosting.get.length(selBoard);

  var id = '0';

  const formData = new FormData();

  if (boardLen > 0) {
    const maxId = await doPosting.get.latestId(selBoard);
    id = parseInt(maxId) + 1;
  }

  for (var i = 0; i < imagesArr.length; i++) {
    formData.append('images', imagesArr[i]);
  }

  const res = await doImage.post(formData, selBoard);
  await doPosting.post(selBoard, id, title, content, res, userObj);
};

const getImagesUrlArr = (files) => {
  const imagesUrlArr = [];
  for (var i = 0; i < files.length; i++) {
    const imageUrl = window.URL.createObjectURL(files[i]);
    imagesUrlArr.push(imageUrl);
  }
  return imagesUrlArr;
};

const LayoutStyle = styled.div`
  margin-bottom: 15px;
`;

export default function PostingCreatingPage() {
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
        <PostingCreatingImgUploadArea
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
                      files,
                      dispatch,
                      userObj,
                    );
                  }
                } else {
                  alert('제목 및 내용을 입력하세요');
                }
              }
            }}
          />
        )}
      </LayoutStyle>
    </>
  );
}
