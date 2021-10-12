import { useEffect, useState } from 'react';
import { useDispatch } from './context';
import { getUser } from './doApi';

export default function Auth({ children }) {
  const dispatch = useDispatch();
  const [firstMounted, setFirstMounted] = useState(false);

  useEffect(() => {
    if (!firstMounted) {
      const getStoredUser = async () => {
        if (typeof window !== 'undefined') {
          const storedToken = localStorage.getItem('token');
          if (storedToken) {
            const storedId = localStorage.getItem('id');
            const user = await getUser.doGetUserById(storedId);
            dispatch({
              type: 'login',
              userName: user.nickname,
              userEmail: user.email,
              userId: user.id,
            });
          }
        }
      };
      getStoredUser();
      setFirstMounted(true);
    }
  }, [dispatch, firstMounted]);

  return <>{children}</>;
}
