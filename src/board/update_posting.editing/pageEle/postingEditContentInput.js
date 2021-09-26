import { useState } from 'react';
import styled from 'styled-components';
import { BtnPosting } from '../../../../components/Atoms/BtnPosting';
import IptContent from '../../../../components/Atoms/IptContent';
import IptTitle from '../../../../components/Atoms/IptTitle';
import LinBetweenTitleContent from '../../../../components/Atoms/LinBetweenTitleContent';
import { useDispatch, useReducerState } from '../../../common/context';
import postCntSwitcher from '../../../common/postCntSwitcher';
import { postPosting } from '../../../doApi/doApi';

const ContentInputStyle = styled.div`
  flex-direction: column;
  margin: 20px 0 15px 0;

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
`;

export default function PostingEditContentInput() {
  const dispatch = useDispatch();
  const postCnt = useReducerState().postCnt;
  const { board_type, id, title, content } = useReducerState().nowPostingEleObj;
  const [editEle, setEditEle] = useState({ title, content });

  return (
    <ContentInputStyle>
      <div className="content_input">
        <IptTitle
          onChange={(e) => setEditEle({ ...editEle, title: e.target.value })}
          value={editEle.title}
        />
        <LinBetweenTitleContent />
        <IptContent
          onChange={(e) => setEditEle({ ...editEle, content: e.target.value })}
          value={editEle.content}
        />
        <div
          onClick={async () => {
            if (!postCnt) {
              if (editEle.title && editEle.content) {
                postCntSwitcher(dispatch, true);
                await postPosting.doPostEdit(
                  board_type,
                  id,
                  editEle.title,
                  editEle.content,
                  dispatch,
                );
                postCntSwitcher(dispatch, false);
              } else {
                alert('제목 및 내용을 입력하세요');
              }
            }
          }}
        >
          <BtnPosting>업로드</BtnPosting>
        </div>
      </div>
    </ContentInputStyle>
  );
}
