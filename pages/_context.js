import { createContext, useContext, useReducer } from "react";

export const StateCtx = createContext(null);
export const DispatchCtx = createContext(null);

const initState = {
  nowPage: null,
  animate: {
    about: false,
    free: false,
    comuin: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "/about":
      return {
        nowPage: action.type,
        animate: {
          ...state.animate,
          about: action.isAnimate,
        },
      };
    case "/free":
      return {
        nowPage: action.type,
        animate: {
          ...state.animate,
          free: action.isAnimate,
        },
      };
    case "/comuin":
      return {
        nowPage: action.type,
        animate: {
          ...state.animate,
          comuin: action.isAnimate,
        },
      };
    case "/":
      return {
        nowPage: action.type,
        animate: initState.animate,
      };
    default:
      return state;
  }
};

export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateCtx.Provider value={state}>
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </StateCtx.Provider>
  );
}

export const useReducerState = () => {
  const state = useContext(StateCtx);
  if (state === undefined) throw new Error("Context를 찾을 수 없습니다.");
  return state;
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchCtx);
  if (dispatch === undefined) throw new Error("Context를 찾을 수 없습니다.");
  return dispatch;
};
