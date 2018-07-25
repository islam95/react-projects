import { ADD_REMINDER } from "./types";

//ActionCreator for ADD_REMINDER
export const addReminder = text => {
  //create an action and return it
  const action = { type: ADD_REMINDER, text };
  //console.log("Action ADD_REMINDER: ", action);
  return action;
};
