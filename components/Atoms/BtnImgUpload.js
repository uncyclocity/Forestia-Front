import styled from 'styled-components';
import getImagesUrlArr from '../../src/board/update_posting.creating/etcFunc/getImagesUrlArr';
import { useReducerState } from '../../src/common/context';

// BtnImgUpload
// 분류 : 버튼
// 용도 : 포스팅 작성 페이지에서 이미지를 업로드하는데 쓰이는 버튼

export default function BtnImgUpload({ images }) {
  const Styles = styled.div`
    width: 300px;
  `;

  const nowPostingEleObj = useReducerState().nowPostingEleObj;

  return (
    <Styles>
      <input
        type="file"
        ref={images}
        accept="image/*"
        onChange={() =>
          setNowPostingEleObj(dispatch, {
            ...nowPostingEleObj,
            imagesUrl: getImagesUrlArr(images.current.files),
          })
        }
        multiple
      />
    </Styles>
  );
}
