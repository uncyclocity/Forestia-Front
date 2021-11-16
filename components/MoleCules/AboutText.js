import styled from 'styled-components';
import TxtLineAboutDescription from '../Atoms/Text/TxtLineAboutDescription';

const Styles = styled.div`
  border-left: 1px solid #e9ecef;
  padding-left: 40px;
  @media screen and (max-width: 700px) {
    border-left: 0px;
    padding-left: 0px;
  }
`;

export default function AboutText() {
  return (
    <Styles>
      <TxtLineAboutDescription>본 사이트는</TxtLineAboutDescription>
      <TxtLineAboutDescription>
        <div className="bold">백괴</div>가&nbsp;
        <div className="bold">Next.js</div>를 연습할 목적으로 만들어진
      </TxtLineAboutDescription>
      <TxtLineAboutDescription>
        작은 커뮤니티 공간입니다.
      </TxtLineAboutDescription>
      <TxtLineAboutDescription>
        부족하더라도 꾸준히 노력하는 백괴가 되겠습니다 :)
      </TxtLineAboutDescription>
    </Styles>
  );
}
