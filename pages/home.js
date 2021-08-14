import { useDispatch } from './_context';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'home',
      animation: 4,
    });
  }, [dispatch]);

  return null;
}
