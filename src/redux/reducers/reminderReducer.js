import { ADD_REMINDER } from "../actions/types";

const Reminders = (state = [], action) => {
  switch (action.type) {
    case ADD_REMINDER:
      console.log("Reducer: ", [
        ...state,
        { text: action.text, id: Math.random() }
      ]);
      return [...state, { text: action.text, id: Math.random() }];

    default:
      return state;
  }
};

export default Reminders;
