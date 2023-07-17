import { Comment } from "./types";

interface commentState {
  data: Comment[];
  loading: boolean;
  error: string | null;
}

const initialCommentState: commentState = {
  data: [],
  loading: false,
  error: null
};

const commentReducer = (state = initialCommentState, action: any) => {
  switch (action.type) {
    case "FETCH_COMMENT_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_COMMENT_FAILURE":
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default commentReducer;
