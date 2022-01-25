import { useState } from 'react';
import styled from 'styled-components';
import BtnPosting from '../Atoms/Button/BtnPosting';
import IptContent from '../Atoms/Input/IptContent';
import IptTitle from '../Atoms/Input/IptTitle';
import IcoFreePhoto from '../Atoms/Icon/IcoFreePhoto';
import LinBetweenTitleContent from '../Atoms/Line/LinBetweenTitleContent';
import { useDispatch, useReducerState } from '../Contexts/context';
import { putPosting } from '../../utils/updateFunc/posting/putPosting';

const ContentInputStyle = styled.div`
  margin: 20px 0 15px 0;
`;

export default function PostingPutPage() {
  const dispatch = useDispatch();
  const postCnt = useReducerState().postCnt;
  const { boardType, id, title, content, authorId } =
    useReducerState().nowPostingEleObj;
  const [editEle, setEditEle] = useState({ title, content });

  return (
    <>
      <IcoFreePhoto boardType={boardType} />
      <ContentInputStyle>
        <IptTitle
          onChange={(e) => setEditEle({ ...editEle, title: e.target.value })}
          value={editEle.title}
        />
        <LinBetweenTitleContent />
        <IptContent
          onChange={(e) => setEditEle({ ...editEle, content: e.target.value })}
          value={editEle.content}
        />
        <BtnPosting
          text="수정"
          onClick={() =>
            putPosting({ postCnt, editEle, dispatch, boardType, id, authorId })
          }
        />
      </ContentInputStyle>
    </>
  );
}
