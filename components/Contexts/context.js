import { createContext, useContext, useReducer } from 'react';

export const StateCtx = createContext(null);
export const DispatchCtx = createContext(null);

export default function Context({ children }) {
  const initState = {
    user: {
      userName: '',
      userEmail: '',
      userId: '',
    },
    nowPage: null,
    isPostPage: false,
    nowPostingEleObj: {},
    postCnt: false,
    modal: {
      title: '',
      content: '',
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'initiate': {
        return {
          ...state,
          nowPage: action.nowPage,
        };
      }
      case 'postpage_switcher': {
        return {
          ...state,
          isPostPage: action.isPostPage,
        };
      }
      case 'editpost_data': {
        return {
          ...state,
          nowPostingEleObj: action.nowPostingEleObj,
        };
      }
      case 'postcnt_switcher': {
        return {
          ...state,
          postCnt: action.sw,
        };
      }
      case 'login': {
        return {
          ...state,
          user: {
            userName: action.userName,
            userEmail: action.userEmail,
            userId: action.userId,
          },
        };
      }
      case 'logout': {
        return {
          ...state,
          user: {
            userName: '',
            userEmail: '',
            userId: '',
          },
        };
      }
      case 'modal': {
        return {
          ...state,
          modal: {
            title: action.title,
            content: action.content,
          },
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateCtx.Provider value={state}>
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </StateCtx.Provider>
  );
}

export const useReducerState = () => {
  const state = useContext(StateCtx);
  if (state === undefined) throw new Error('Context를 찾을 수 없습니다.');
  return state;
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchCtx);
  if (dispatch === undefined) throw new Error('Context를 찾을 수 없습니다.');
  return dispatch;
};