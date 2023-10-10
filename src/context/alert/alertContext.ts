import { createContext } from "react";

const defaultValue = {
  alert: { type: "", msg: "" },
  showAlert: (msg: string, cls: string) => {},
  setAlert: (msg: string | null, cls: string | null) => {},
};
const alertContext = createContext(defaultValue);

export default alertContext;
