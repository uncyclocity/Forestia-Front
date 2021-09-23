import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../src/common/context';
import setNowPostingEle from '../../src/common/setNowPostingEle';
import _ from 'lodash';
import { useEffect, useRef } from 'react';

// IptTitle
// 분류 : 인풋
// 용도 : 포스팅 작성/수정 페이지에서 제목 입력하는 박스

export default function IptTitle() {
  const Styles = styled.div`
    input {
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
  `;

  const nowPostingEleObj = useReducerState().nowPostingEleObj;
  const dispatch = useDispatch();
  const inputRef = useRef('');

  useEffect(() => {
    if (inputRef.current && nowPostingEleObj.title) {
      inputRef.current.value = nowPostingEleObj.title;
    }
  });

  const onChange = (e) => {
    setNowPostingEle(dispatch, {
      ...nowPostingEleObj,
      title: e.target.value,
    });
  };

  return (
    <Styles>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        onChange={onChange}
        ref={inputRef}
      />
    </Styles>
  );
}
