import { RiLeafLine } from 'react-icons/ri';
import styled from 'styled-components';

// TxtCatchphrase
// 분류 : 텍스트
// 용도 : 헤더에 입력되어 있는 캐치프레이즈

const Styles = styled.div`
  width: 100%;
  min-width: 215px;
  font-weight: bold;
  font-size: 25px;
  color: white;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export default function TxtCatchphrase() {
  return (
    <Styles>
      풀내음이 함께하는
      <br />
      이야기를 들려주세요&nbsp;
      <RiLeafLine />
    </Styles>
  );
}
