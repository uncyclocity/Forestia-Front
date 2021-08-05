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
  freeBoard: [
    {
      author: "백괴",
      date: "2021-08-02 22:39:08",
      title: "테스트1",
      content: "자게/테스트1 입니다.",
      comment: [
        {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트1/댓글1 입니다.",
        },
        {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트1/댓글2 입니다.",
        },
        {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트1/댓글3 입니다.",
        },
      ],
    },
    {
      author: "백괴",
      date: "2021-08-02 22:39:08",
      title: "테스트2",
      content: "자게/테스트2 입니다.",
      comment: {
        0: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트2/댓글1 입니다.",
        },
        1: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트2/댓글2 입니다.",
        },
        2: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트2/댓글3 입니다.",
        },
      },
    },
    {
      author: "백괴",
      date: "2021-08-02 22:39:08",
      title: "테스트3",
      content: "자게/테스트3 입니다.",
      comment: {
        0: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트3/댓글1 입니다.",
        },
        1: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트3/댓글2 입니다.",
        },
        2: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트3/댓글3 입니다.",
        },
      },
    },
  ],
  photoBoard: [
    {
      author: "백괴",
      date: "2021-08-02 22:39:08",
      title: "테스트1",
      content: "자게/테스트1 입니다.",
      comment: {
        0: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트1/댓글1 입니다.",
        },
        1: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트1/댓글2 입니다.",
        },
        2: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트1/댓글3 입니다.",
        },
      },
    },
    {
      author: "백괴",
      date: "2021-08-02 22:39:08",
      title: "테스트2",
      content: "자게/테스트2 입니다.",
      comment: {
        0: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트2/댓글1 입니다.",
        },
        1: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트2/댓글2 입니다.",
        },
        2: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트2/댓글3 입니다.",
        },
      },
    },
    {
      author: "백괴",
      date: "2021-08-02 22:39:08",
      title: "테스트3",
      content: "자게/테스트3 입니다.",
      comment: {
        0: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트3/댓글1 입니다.",
        },
        1: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트3/댓글2 입니다.",
        },
        2: {
          author: "백괴",
          date: "2021-08-02 22:39:08",
          content: "자게/테스트3/댓글3 입니다.",
        },
      },
    },
  ],
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
    case "/home":
      return {
        nowPage: action.type,
        animate: state.animate,
      };
    case "initiate": {
      return {
        ...state,
        nowPage: action.nowPage,
      };
    }
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
