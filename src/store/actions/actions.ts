import { Dispatch } from "redux";
import { baseUrl } from "./baseUrl";
type Register = {
  username: string;
  email: string;
  password: string;
}

type Tweet = {
  description: string;
}

type Comment = {
  description: string;
}

type Profile = {
  username: string;
  email: string;
  location: string;
  description: string;
  fullname: string;
  imgUrl: string;
};

// users

export const fetchProfile = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Perform API request
      const response = await fetch(`${baseUrl}/User/3`);
      const data = await response.json();

      // Dispatch action with the received data
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: error });
    }
  };
};

export const register = (data: Register) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/User`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          "location": "indonesia",
          "description": "aku adalah seorang ultraman",
          "fullname": "Raihan Aqil",
          "imgUrl": "https://example.com/"
        })
      })
      const res = await response.json()
      return res
    } catch (error) {
      console.log(error);            
    }
  }
}

export const profilePost = (data: Profile) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/User/3`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
        })
      })
      const res = await response.json()
      dispatch(fetchProfile())
      return res
    } catch (error) {
      console.log(error);            
    }
  }
}

// thread

export const threadPost = (data: Tweet) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/Thread`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          like: 0
        })
      })
      const res = await response.json()
      dispatch(fetchThread())
      return res
    } catch (error) {
      console.log(error);            
    }
  }
}

export const fetchThread = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Perform API request
      const response = await fetch(`${baseUrl}/Thread`);
      const data = await response.json();

      // Dispatch action with the received data
      dispatch({ type: "FETCH_THREAD_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_THREAD_FAILURE", payload: error });
    }
  }
}

export const fetchThreadDetail = (id: any) => {
  return async (dispatch: Dispatch) => {
    try {
      // Perform API request
      const response = await fetch(`${baseUrl}/Thread/${id}`);
      const data = await response.json();

      // Dispatch action with the received data
      dispatch({ type: "FETCH_THREAD_DETAIL_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_THREAD_DETAIL_FAILURE", payload: error });
    }
  }
}

// comment

export const fetchComment = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Perform API request
      const response = await fetch(`${baseUrl}/Comment`);
      const data = await response.json();

      // Dispatch action with the received data
      dispatch({ type: "FETCH_COMMENT_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_COMMENT_FAILURE", payload: error });
    }
  }
}

export const commentPost = (data: Comment) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/Comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          like: 0
        })
      })
      const res = await response.json()
      dispatch(fetchComment())
      return res
    } catch (error) {
      console.log(error);            
    }
  }
}

// like 

export const addLike = (id: any, type: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/${type}/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const res = await response.json()
      dispatch(fetchComment())
      dispatch(fetchThread())
      return res
    } catch (error) {
      console.log(error);            
    }
  }
}

export const removeLike = (id: any, type: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/${type}/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const res = await response.json()
      dispatch(fetchComment())
      dispatch(fetchThread())
      return res
    } catch (error) {
      console.log(error);            
    }
  }
}