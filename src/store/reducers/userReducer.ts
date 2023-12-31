import { User } from "./types";

interface UsersState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialUsersState: UsersState = {
  data: null,
  loading: false,
  error: null
};

const usersReducer = (state = initialUsersState, action: any) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_USERS_FAILURE":
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

export default usersReducer;
