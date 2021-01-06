import axios from "axios";
// import { axiosWithAuth } from "../utility/axiosWithAuth";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchOwners = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAIL, payload: err.response });
    });
};

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const postOwner = (formValues) => (dispatch) => {
  dispatch({ type: POST_START });
  axios
    .post("https://jsonplaceholder.typicode.com/post",formValues)
    .then((res) => {
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_FAIL, payload: err.response });
    });
};
