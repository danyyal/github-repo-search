import React from "react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = {
  Store: () => {
    return <ToastContainer />;
  },

  info: (message: string, options: ToastOptions = {}) => {
    toast.info(message, options);
  },
  success: (message: string, options: ToastOptions = {}) => {
    toast.success(message, options);
  },
  warning: (message: string, options: ToastOptions = {}) => {
    toast.warning(message, options);
  },
  error: (message: string, options: ToastOptions = {}) => {
    toast.error(message, options);
  },
  default: (message: string, options: ToastOptions = {}) => {
    toast(message, options);
  },
};

export default ToastMessage;
