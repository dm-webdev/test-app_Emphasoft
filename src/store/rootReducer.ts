import { Reducer } from "redux";
import {
  FILTER_USERLIST,
  GET_USERLIST,
  GET_USERNAME,
  HIDE_ALERT,
  HIDE_LOADER,
  LOG_OUT,
  OPEN_LOGIN_FORM,
  SHOW_ALERT,
  SHOW_LOADER,
  UPDATE_TOKEN,
} from "./const";
import { initialState, RootState } from "./initialState";

export const rootReducer: Reducer<RootState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OPEN_LOGIN_FORM:
      return {
        ...state,
        isLoginFormOpen: action.isLoginFormOpen,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case GET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isShowLoader: action.isShowLoader,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isShowLoader: action.isShowLoader,
      };
    case SHOW_ALERT:
      return {
        ...state,
        isShowAlert: action.isShowAlert,
      };
    case HIDE_ALERT:
      return {
        ...state,
        isShowAlert: action.isShowAlert,
      };
    case LOG_OUT:
      return {
        ...state,
        token: action.token,
      };
    case GET_USERLIST:
      return {
        ...state,
        usersList: action.usersList,
      };
    case FILTER_USERLIST:
      return {
        ...state,
        usersList: action.usersList,
      };

    default:
      return state;
  }
};
