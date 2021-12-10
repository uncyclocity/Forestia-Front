import styled from 'styled-components';
import { IoMdSettings } from 'react-icons/io';

// IcoAccountSetting
// 분류 : 아이콘
// 용도 : 계정 설정을 의미하는 아이콘

const Styles = styled.div`
  font-size: 14px;
  height: 14px;
`;

export default function IcoAccountSetting() {
  return (
    <Styles>
      <IoMdSettings />
    </Styles>
  );
}
