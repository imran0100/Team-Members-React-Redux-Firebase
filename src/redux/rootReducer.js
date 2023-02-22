import { combineReducers } from "redux";
import userReducer from "./reducer";
import memberReducer from "./memberReducer";
const rootReducer = combineReducers({
  user: userReducer,
  member: memberReducer,
});

export default rootReducer;
