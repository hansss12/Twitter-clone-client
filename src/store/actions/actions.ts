import { Dispatch } from "redux";

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Perform API request
      const response = await fetch("https://api.example.com/users");
      const data = await response.json();

      // Dispatch action with the received data
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: error });
    }
  };
};
