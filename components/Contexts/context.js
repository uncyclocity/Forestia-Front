import { createContext, useContext, useReducer } from 'react';

export const StateCtx = createContext(null);
export const DispatchCtx = createContext(null);

export default function Context({ children }) {
  const initState = {
    user: {
      userName: '',
      userEmail: '',
      userId: '',
      imageUrl: '',
    },
    nowPage: null,
    isPostingPage: false,
    nowPostingEleObj: {},
    postCnt: false,
    modal: {
      active: false,
      closeAnimation: false,
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
      case 'posting_page_switcher': {
        return {
          ...state,
          isPostingPage: action.isPostingPage,
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
            imageUrl: action.imageUrl,
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
            imageUrl: '',
          },
        };
      }
      case 'modal': {
        return {
          ...state,
          modal: {
            active: action.active,
            closeAnimation: false,
            title: action.title,
            content: action.content,
          },
        };
      }
      case 'modal_close': {
        return {
          ...state,
          modal: {
            ...state.modal,
            closeAnimation: true,
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
