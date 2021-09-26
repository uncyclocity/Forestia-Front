import styled from 'styled-components';

// BtnPosting
// 분류 : 버튼
// 용도 : 포스팅 업데이트에 관련 된 POST 작업에서 사용된다.

const Styles = styled.div`
  background: #20c997;
  color: white;
  border-radius: 5px;
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-left: 87%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background: #37dfad;
  }
`;

export const BtnPosting = ({ text }) => {
  return <Styles>{text}</Styles>;
};
