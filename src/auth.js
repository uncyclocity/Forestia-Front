import { useEffect, useState } from 'react';
import { useDispatch } from './context';
import { getUser } from './doApi';
import jwt from 'jsonwebtoken';

const getStoredUser = (dispatch) => {
  if (typeof window !== 'undefined') {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      jwt.verify(
        storedToken,
        process.env.NEXT_PUBLIC_JWT_SECRET,
        async (err, decoded) => {
          if (err) {
            console.error(err);
            return;
          }
          const { id, email } = decoded;
          const user = await getUser.doGetUserById(id);
          if (user !== '') {
            dispatch({
              type: 'login',
              userName: user.nickname,
              userEmail: email,
              userId: id,
            });
          }
        },
      );
    }
  }
};

export default function Auth({ children }) {
  const dispatch = useDispatch();
  const [firstMounted, setFirstMounted] = useState(false);

  useEffect(() => {
    if (!firstMounted) {
      getStoredUser(dispatch);
      setFirstMounted(true);
    }
  }, [dispatch, firstMounted]);

  return <>{children}</>;
}
