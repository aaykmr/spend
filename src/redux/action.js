//action describing what type of action it is

import {
  GETDATA_FAILURE,
  GETDATA_REQUEST,
  GETDATA_SUCCESS,
  SEARCHDATA_FAILURE,
  SEARCHDATA_REQUEST,
  SEARCHDATA_SUCCESS,
} from "./actiontype";

import users from "../users.json";
//action describing requestdata
export const getDataRequest = () => {
  return {
    type: GETDATA_REQUEST,
  };
};
// action describing successdata

export const getDataSuccess = (payload) => {
  return {
    type: GETDATA_SUCCESS,
    payload,
  };
};
// action describing Failuredata
export const getDataFailure = (error) => {
  return {
    type: GETDATA_FAILURE,
    payload: error,
  };
};
//using thunk to work between action and reducer
//using thunk we can delay the execution of our function

export const getData = () => (dispatch) => {
  //requesting for data from reducer
  dispatch(getDataRequest());
  const localData = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : users;
  localStorage.setItem("users", JSON.stringify(localData));

  const actualData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : users;
  dispatch(getDataSuccess(actualData));
};
export const setNewUser = (payload) => (dispatch) => {
  //requesting for data from reducer
  dispatch(getDataRequest());
  localStorage.setItem("users", JSON.stringify(payload));
  dispatch(getDataSuccess(JSON.parse(localStorage.getItem("users"))));
};

export const setUser = (payload) => (dispatch) => {
  //requesting for data from reducer
  dispatch(getDataRequest());
  localStorage.setItem("user", JSON.stringify(payload));
  dispatch(getDataSuccess(JSON.parse(localStorage.getItem("user"))));
};

export const updateUser = (payload) => (dispatch) => {
  //requesting for data from reducer
  dispatch(getDataRequest());
  let curr = JSON.parse(localStorage.getItem("users"));
  let currIndex = -1;
  curr.find((ele) => {
    if (ele.username === payload.username) {
      currIndex = curr.indexOf(ele);
    }
  });
  console.log(currIndex);
  curr.splice(currIndex, 1);
  curr.push(payload);
  localStorage.setItem("users", JSON.stringify(curr));
  //   localStorage.setItem("users");
  //   dispatch(getDataSuccess(JSON.parse(localStorage.getItem("user"))));
};

export const logout = (payload) => (dispatch) => {
  //requesting for data from reducer
  dispatch(getDataRequest());
  localStorage.removeItem("user");
  dispatch(getDataSuccess(JSON.parse(localStorage.getItem("users"))));
};

//action describing search requestdata

export const searchDataRequest = () => {
  return {
    type: SEARCHDATA_REQUEST,
  };
};
//action describing search successtdata

export const searchDataSuccess = (payload) => {
  return {
    type: SEARCHDATA_SUCCESS,
    payload,
  };
};
//action describing search failuree data

export const searchDataFailure = (err) => {
  return {
    type: SEARCHDATA_FAILURE,
    payload: err,
  };
};
