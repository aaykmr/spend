//reducer function wriiten over here which takes state and action (payload)
import {
  GETDATA_FAILURE,
  GETDATA_REQUEST,
  GETDATA_SUCCESS,
  SEARCHDATA_SUCCESS,
  SEARCHDATA_REQUEST,
  SEARCHDATA_FAILURE,
} from "./actiontype";
//initial state and loading and error
const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};
//reducer function containing initial state and action ,action which takes payload
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  //switch case logics payload state loading and error
  switch (type) {
    case GETDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GETDATA_SUCCESS: {
      return {
        ...state,
        users: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GETDATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case SEARCHDATA_REQUEST: {
      return {
        ...state,

        isLoading: true,
        isError: false,
      };
    }

    case SEARCHDATA_SUCCESS: {
      return {
        ...state,
        users: payload,
        isLoading: false,
        isError: false,
      };
    }

    case SEARCHDATA_FAILURE: {
      return {
        ...state,

        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
