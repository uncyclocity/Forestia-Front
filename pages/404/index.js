import { useDispatch } from '../../src/common/context';
import { useEffect } from 'react';
import { mountAnimation } from '../../src/common/animationController';
import Error404Template from '../../components/Templates/Error404Template';

export default function NotFoundPage() {
  const dispatch = useDispatch();
  const errorCode = '404';

  useEffect(() => {
    mountAnimation(dispatch, errorCode);
  }, [dispatch]);

  return <Error404Template />;
}
