import { createContext, useContext, useReducer } from 'react';

export const StateCtx = createContext(null);
export const DispatchCtx = createContext(null);

export default function Context({ children, freeBoard, photoBoard }) {
  const initState = {
    userName: '백괴',
    nowPage: null,
    animation: 5,
    freeBoard,
    photoBoard,
    isPostPage: false,
    nowPostingEleObj: {},
    postCnt: false,
    pathArrTmp: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'initiate': {
        return {
          ...state,
          nowPage: action.nowPage,
          animation: action.animation,
        };
      }
      case 'change_animation': {
        return {
          ...state,
          animation: action.animation,
        };
      }
      case 'update_post': {
        return {
          ...state,
          freeBoard: action.freeBoard,
          photoBoard: action.photoBoard,
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
      case 'use_patharrtmp': {
        return {
          ...state,
          pathArrTmp: action.pathArrTmp,
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
