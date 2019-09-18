import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import userProfile from "./userProfile";
import generate from "./generate";

export default combineReducers({
  alert,
  auth,
  userProfile,
  generate
});
