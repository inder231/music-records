import { saveAuth } from "../../utils/sessionStorage";
import * as types from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      saveAuth("auth",payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
