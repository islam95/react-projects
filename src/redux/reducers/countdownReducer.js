import { CHANGE_DEADLINE } from "../actions/types";

const Deadlines = (state = "December 18, 2018", action) => {
  switch (action.type) {
    case CHANGE_DEADLINE:
      const deadline = action.date;
      return deadline;
 
    default:
      return state;
  }
};

export default Deadlines;
