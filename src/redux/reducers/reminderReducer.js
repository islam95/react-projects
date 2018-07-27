import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../actions/types";
import { bake_cookie, read_cookie } from "sfcookies";

const Reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie("reminders");
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [
        ...state,
        { id: Math.random(), text: action.text, dueDate: action.dueDate }
      ];
      bake_cookie("reminders", reminders);
      return reminders;

    case DELETE_REMINDER:
      const newState = [...state];
      reminders = newState.filter(reminder => reminder.id !== action.id);
      bake_cookie("reminders", reminders);
      return reminders;

    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie("reminders", reminders);
      return reminders;

    default:
      return state;
  }
};

export default Reminders;
