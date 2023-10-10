import { SET_ALERT, CLEAR_ALERT } from "../types.ts";

const alertState = (state: any, action: any) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: "",
      };
    default:
      return state;
  }
};

export default alertState;
