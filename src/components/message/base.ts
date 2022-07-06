import icons from "./icons";

export const createMessage = (
  msg: string,
  type: "info" | "success" | "warning" | "error"
): void => {
  const msgBoxes = document.getElementsByClassName("void-message-box");
  let msgBox: Element;
  console.log({ msgBoxes });
  if (msgBoxes[0]) {
    msgBox = msgBoxes[0];
  } else {
    msgBox = document.createElement("div");
    msgBox.className = "void-message-box";
    document.body.appendChild(msgBox);
  }

  const msgDiv = document.createElement("div");
  msgDiv.className = `void-message void-message-${type}`;
  const msgText = document.createElement("p");
  msgText.className = "void-message-text";
  msgText.innerText = msg;
  const msgIcon = document.createElement("div");
  msgIcon.className = "void-message-icon";
  msgIcon.innerHTML = icons[type];
  msgDiv.appendChild(msgIcon);
  msgDiv.appendChild(msgText);
  msgBox.appendChild(msgDiv);
  setTimeout(() => {
    msgBox.removeChild(msgDiv);
  }, 5000);
};
