import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { appReducer } from "./AppReducer/appReducer";
import { authReducer } from "./AuthReducer/authReducer";
const rootReducer = combineReducers({ appReducer, authReducer });

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
