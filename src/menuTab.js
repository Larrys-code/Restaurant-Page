import * as domMethod from "./domMethod";

export default function insertMenuContent() {
  const contentBody = document.querySelector(".content-body");
  contentBody.textContent = "";

  const title = domMethod.createElement("h1");
  const text = domMethod.createElement("p");
  text.textContent = "blah blah menu page blah";

  domMethod.appendChildren(contentBody, title, text);
}
