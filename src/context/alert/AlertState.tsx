import React, { useReducer } from "react";
import alertContext from "./alertContext.ts";
import alertReducer from "./alertReducer.ts";

import { SET_ALERT } from "../types.ts";

const AlertState = (props: any) => {
  const initialState = {
    alert: null,
  };

  const showAlert = (msg: string, cls: string) => {
    setAlert(msg, cls);
    setTimeout(() => {
      setAlert(null, null);
    }, 2000);
  };

  const setAlert = (msg: string | null, cls: string | null) => {
    if (msg === null) {
      dispatch({ type: SET_ALERT, payload: null });
    } else {
      dispatch({ type: SET_ALERT, payload: { msg, cls } });
    }
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
