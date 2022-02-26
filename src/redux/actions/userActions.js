import axios from "axios";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./userTypes";

//login
export const login = (info) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
  
    try {
      const res = await axios.post(`http://localhost:5500/api/user/login`, info);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error,
      });
    }
  };