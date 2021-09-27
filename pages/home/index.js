import { useEffect } from 'react';
import { mountAnimation } from '../../src/common/animationController';
import { useDispatch } from '../../src/common/context';
import { getPosting } from '../../src/doApi/doApi';
import HomeTemplate from '../../components/Templates/HomeTemplate';

export default function Home({ freeBoard, photoBoard }) {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'home');
  }, [dispatch]);

  return <HomeTemplate freeBoard={freeBoard} photoBoard={photoBoard} />;
}

Home.getInitialProps = async () => {
  const freeBoard = await getPosting.doGetTop3('free');
  const photoBoard = await getPosting.doGetTop3('photo');
  return { freeBoard, photoBoard };
};
