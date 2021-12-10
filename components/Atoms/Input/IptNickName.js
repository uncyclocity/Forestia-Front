import styled from 'styled-components';

// IptTitle
// 분류 : 인풋
// 용도 : 포스팅 작성/수정 페이지에서 제목 입력하는 박스

const Styles = styled.div`
  input {
    width: 185px;
    font-size: 20px;
    color: #464646;
    border: none;
    outline: none;

    &:focus {
      transition: 0.15s all ease-in-out;
      border-bottom: 2px solid #20c997;
    }

    &:not(:focus) {
      transition: 0.15s all ease-in-out;
      border-bottom: 2px solid #aaaaaa;
    }

    &::placeholder {
      color: #aaaaaa;
    }
  }
`;

export default function IptNickName({ onChange, value }) {
  return (
    <Styles>
      <input
        type="text"
        placeholder="입력하세요"
        onChange={onChange}
        value={value}
      />
    </Styles>
  );
}
