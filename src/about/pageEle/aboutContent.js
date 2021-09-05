import { SiNextDotJs } from 'react-icons/si';

export default function AboutContent() {
  return (
    <div className="content">
      <div className="next_logo">
        <SiNextDotJs />
      </div>
      <div className="text">
        <div className="line">본 게시판은</div>
        <div className="line">
          <div className="bold">백괴</div>가 Next.js의&nbsp;
          <div className="bold">라우팅</div>&nbsp;및&nbsp;
          <div className="bold">링크 컴포넌트</div>를
        </div>
        <div className="line">연습할 목적으로 만들어졌습니다.</div>
        <div className="line">
          장래가 기대되는 백괴에게 뜨거운 박수를 부탁드립니다.
        </div>
      </div>
    </div>
  );
}
