import { RiLeafLine } from 'react-icons/ri';
import styled from 'styled-components';

// LblCatchphrase
// 분류 : 레이블
// 용도 : 헤더에 입력되어 있는 캐치프레이즈

export default function LblCatchphrase() {
  const Styles = styled.div`
    width: 100%;
    margin-left: 10px;
    font-weight: bold;
    font-size: 25px;
  `;

  return (
    <Styles>
      풀내음이 함께하는
      <br />
      자취 이야기를 들려주세요&nbsp;
      <RiLeafLine />
    </Styles>
  );
}
