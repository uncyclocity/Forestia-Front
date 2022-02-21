import styled from 'styled-components';

// IptComment
// 분류 : 인풋
// 용도 : 댓글입력/수정 인풋박스

const Styles = styled.div`
  textarea {
    width: ${({ width }) => width}px;
    @media screen and (max-width: 700px) {
      width: ${({ width }) => width - 310}px;
    }

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

export default function IptComment({
  onChange,
  onKeyDown,
  value,
  width,
  placeholder,
}) {
  return (
    <Styles width={width}>
      <textarea
        style={{ resize: 'none' }}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </Styles>
  );
}
