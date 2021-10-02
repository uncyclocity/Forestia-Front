import { useDispatch } from '../../src/context';
import { useEffect } from 'react';
import Error404Template from '../../components/Templates/Error404Template';

export default function NotFoundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: '404',
    });
  }, [dispatch]);

  return <Error404Template />;
}
