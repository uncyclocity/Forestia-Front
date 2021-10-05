import styled from 'styled-components';

// IptComment
// 분류 : 인풋
// 용도 : 댓글입력/수정 인풋박스

const Styles = styled.div`
  textarea {
    width: 570px;
    height: 50px;

    margin-right: 15px;

    border: none;
    border-radius: 5px;

    font-family: inherit;
    font-size: 15px;

    border: 1px solid #e9ecef;
    color: #525252;

    &::placeholder {
      color: #aaaaaa;
      font-style: italic;
    }

    &:focus {
      outline: none;
    }
  }
`;

export default function IptComment({ onChange, onKeyDown, value }) {
  return (
    <Styles>
      <textarea
        style={{ resize: 'none' }}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="댓글을 입력하세요"
      />
    </Styles>
  );
}
