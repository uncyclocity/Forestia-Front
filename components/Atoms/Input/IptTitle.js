import styled from 'styled-components';

// IptTitle
// 분류 : 인풋
// 용도 : 포스팅 작성/수정 페이지에서 제목 입력하는 박스

const Styles = styled.div`
  input {
    width: 640px;

    @media screen and (max-width: 700px) {
      width: 275px;
    }

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

export default function IptTitle({ onChange, value }) {
  return (
    <Styles>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        onChange={onChange}
        value={value}
      />
    </Styles>
  );
}
