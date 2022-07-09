import icons from "./icons";

export const createSnackBar = (
  msg: string,
  type: "info" | "success" | "warning" | "error"
): void => {
  const snackbarBoxes = document.getElementsByClassName("void-snackbar-box");
  let SnackbarBox: Element;
  if (snackbarBoxes[0]) {
    SnackbarBox = snackbarBoxes[0];
  } else {
    SnackbarBox = document.createElement("div");
    SnackbarBox.className = "void-snackbar-box";
    document.body.appendChild(SnackbarBox);
  }

  const Snackbar = document.createElement("div");
  const snackbarId = Date.now().toString();
  Snackbar.id = snackbarId;
  Snackbar.className = `void-snackbar void-snackbar-${type}`;
  const snackbarMsg = document.createElement("p");
  snackbarMsg.className = "void-snackbar-text";
  snackbarMsg.innerText = msg;
  const snackbarIcon = document.createElement("div");
  snackbarIcon.className = "void-snackbar-icon";
  snackbarIcon.innerHTML = icons[type];
  Snackbar.appendChild(snackbarIcon);
  Snackbar.appendChild(snackbarMsg);
  SnackbarBox.appendChild(Snackbar);

  const CurrentSnackbar = document.getElementById(snackbarId);

  setTimeout(() => {
    if (CurrentSnackbar) {
      CurrentSnackbar.classList.add("void-snackbar-exit");
    }
  }, 30000);
  setTimeout(() => {
    SnackbarBox.removeChild(Snackbar);
  }, 5000);
};
