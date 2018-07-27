import { combineReducers } from "redux";
import countdownReducer from "../reducers/countdownReducer";
import reminderReducer from "../reducers/reminderReducer";

const rootReducer = combineReducers({
  countdownReducer:countdownReducer,
  reminderReducer:reminderReducer
});

export default rootReducer;
