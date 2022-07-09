import { createSnackBar } from "./base";

const Snackbar: {
  success: (msg: string) => void;
  error: (msg: string) => void;
  warning: (msg: string) => void;
} = {
  success: (msg: string) => createSnackBar(msg, "success"),
  error: (msg: string) => createSnackBar(msg, "error"),
  warning: (msg: string) => createSnackBar(msg, "warning"),
};

export default Snackbar;
