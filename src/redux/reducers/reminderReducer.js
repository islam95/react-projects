import { ADD_REMINDER, DELETE_REMINDER } from "../actions/types";

const Reminders = (state = [], action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [...state, { id: Math.random(), text: action.text, dueDate: action.dueDate }];

    case DELETE_REMINDER:
      const newState = [...state];
      return newState.filter(reminder => reminder.id !== action.id)

    default:
      return state;
  }
};

export default Reminders;
