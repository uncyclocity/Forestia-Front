import { useEffect } from 'react';
import { useDispatch } from '../../src/context';
import AboutTemplate from '../../components/Templates/AboutTemplate';

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'about',
    });
  }, [dispatch]);

  return <AboutTemplate />;
}
