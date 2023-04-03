import { combineReducers } from "redux";

import AuthReducer from "./auth.reducer";

const allReducers = {
  ath: AuthReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
