import { useEffect } from 'react';
import { useDispatch } from '../../src/common/context';
import { mountAnimation } from '../../src/common/animationController';
import AboutTemplate from '../../components/Templates/AboutTemplate';

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'about');
  }, [dispatch]);

  return <AboutTemplate />;
}
