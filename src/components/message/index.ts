import { createMessage } from "./base";

const message: {
  success: (msg: string) => void;
  error: (msg: string) => void;
  warning: (msg: string) => void;
} = {
  success: (msg: string) => createMessage(msg, "success"),
  error: (msg: string) => createMessage(msg, "error"),
  warning: (msg: string) => createMessage(msg, "warning"),
};

export default message;
