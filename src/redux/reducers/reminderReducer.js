import { ADD_REMINDER, DELETE_REMINDER } from "../actions/types";

const Reminders = (state = [], action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [...state, { text: action.text, id: Math.random() }];

    case DELETE_REMINDER:
      const newState = [...state];
      return newState.filter(reminder => reminder.id !== action.id)

    default:
      return state;
  }
};

export default Reminders;
