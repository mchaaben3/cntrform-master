import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/userTypes";

const SIGNIN_STATE = {
    auToken: localStorage.getItem("authToken"),
    isAuth: localStorage.getItem("isAuth"),
    user: null,
    loading: false,
  };
export const authReducer = (state = SIGNIN_STATE, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_SUCCESS:
        localStorage.setItem("authToken", payload);
        localStorage.setItem("isAuth", true);
        return {
          ...state,
          loading: false,
          isAuth: true,
          token: payload,
        };
      case LOGIN_FAILED:
        return {
          ...state,
          loading: false,
          isAuth: false,
          token: null,
        };
      default:
        return state;
    }
  };