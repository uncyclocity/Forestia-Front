import IcoNextjs from '../../../components/Atoms/Icon/IcoNextjs';
import TxtLineAboutDescription from '../../../components/Atoms/Text/TxtLineAboutDescription';

export default function AboutContent() {
  return (
    <div className="content">
      <IcoNextjs />
      <div className="text">
        <TxtLineAboutDescription>본 게시판은</TxtLineAboutDescription>
        <TxtLineAboutDescription>
          <div className="bold">백괴</div>가 Next.js의&nbsp;
          <div className="bold">라우팅</div>&nbsp;및&nbsp;
          <div className="bold">링크 컴포넌트</div>를
        </TxtLineAboutDescription>
        <TxtLineAboutDescription>
          연습할 목적으로 만들어졌습니다.
        </TxtLineAboutDescription>
        <TxtLineAboutDescription>
          장래가 기대되는 백괴에게 뜨거운 박수를 부탁드립니다.
        </TxtLineAboutDescription>
      </div>
    </div>
  );
}
