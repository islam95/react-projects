import { CHANGE_DEADLINE } from "./types";

export const changeDeadline = date => {
  return {
    type: CHANGE_DEADLINE,
    date
  };
};
