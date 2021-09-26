import styled from 'styled-components';

// IptContent
// 분류 : 인풋
// 용도 : 포스팅 작성/수정 페이지에서 내용 입력하는 박스

const Styles = styled.div`
  textarea {
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

export default function IptContent({ onChange, value }) {
  return (
    <Styles>
      <textarea
        style={{ resize: 'none' }}
        placeholder="내용을 입력하세요"
        onChange={onChange}
        value={value}
      />
    </Styles>
  );
}
