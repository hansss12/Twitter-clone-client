import { Thread } from "./types";

interface threadState {
  data: Thread[];
  dataDetail: Thread | null
  loading: boolean;
  error: string | null;
}

const initialThreadState: threadState = {
  data: [],
  dataDetail: null,
  loading: false,
  error: null
};

const threadReducer = (state = initialThreadState, action: any) => {
  switch (action.type) {
    case "FETCH_THREAD_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_THREAD_FAILURE":
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      };
      case "FETCH_THREAD_DETAIL_SUCCESS":
        return {
          ...state,
          dataDetail: action.payload,
          loading: false,
          error: null
        };
      case "FETCH_THREAD_DETAIL_FAILURE":
        return {
          ...state,
          dataDetail: null,
          loading: false,
          error: action.payload
        };
    default:
      return state;
  }
};

export default threadReducer;
