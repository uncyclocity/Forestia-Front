import { useEffect } from 'react';
import { useDispatch } from '../Contexts/context';
import { onSilentRefresh } from '../../utils/loginFunc';
import { doUser } from '../../utils/doApi';

const getStoredUser = async (dispatch) => {
  try {
    await onSilentRefresh();
    const user = doUser.get.byToken();
    dispatch({
      type: 'login',
      userName: user.nickname,
      userEmail: user.email,
      userId: user.id,
    });
  } catch (error) {}
};

export default function Auth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getStoredUser(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
