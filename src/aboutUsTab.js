import * as domMethod from "./domMethod";

export default function insertAboutUsContent() {
  const contentBody = document.querySelector(".content-body");
  contentBody.textContent = "";

  const title = domMethod.createElement("h1");
  const text = domMethod.createElement("p");
  text.textContent = "blah blah about us blah";

  domMethod.appendChildren(contentBody, title, text);
}
