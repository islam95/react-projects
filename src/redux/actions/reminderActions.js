import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "./types";

//ActionCreator for ADD_REMINDER
export const addReminder = (text, dueDate) => {
  //create an action and return it
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  };
  return action;
};

export const deleteReminder = id => {
  return { type: DELETE_REMINDER, id };
};

export const clearReminders = () => {
  return { type: CLEAR_REMINDERS };
};
