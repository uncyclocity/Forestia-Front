import { useDispatch } from './_context';
import Board_title from '../styles/board_title';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { SiNextDotJs } from 'react-icons/si';
import { useEffect } from 'react';
import { mountAnimation } from '../fixed/AnimationController';
import St_about from '../styles/pages/St_about';

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'about');
  }, [dispatch]);

  return (
    <St_about>
      <Board_title backURL="/home">
        <div className="icon">
          <AiOutlineInfoCircle />
        </div>
        게시판 소개
      </Board_title>
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
    </St_about>
  );
}
