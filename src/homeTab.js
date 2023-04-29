import * as domMethod from "./domMethod";
import menuTab from "./menuTab";
import aboutUsTab from "./aboutUsTab";

const content = document.getElementById("content");
function insertHomeContent() {
  const contentBody = document.querySelector(".content-body");
  contentBody.textContent = "";

  const title = domMethod.createElement("h1");
  const text = domMethod.createElement("p");
  text.textContent = "blah blah home page blah";

  domMethod.appendChildren(contentBody, title, text);
}

const pageList = [
  { name: "Home", token: "home", method: insertHomeContent },
  { name: "Menu", token: "menu", method: menuTab },
  { name: "About Us", token: "about-us", method: aboutUsTab },
];

function makePageShell() {
  const header = domMethod.createElement("div", "header");
  pageList.forEach((page) => {
    const pageTab = domMethod.createElement("button", ["tab", `${page.token}`]);
    pageTab.textContent = `${page.name}`;
    pageTab.addEventListener("click", page.method);
    header.appendChild(pageTab);
  });

  const contentBody = domMethod.createElement("div", "content-body");

  const footer = domMethod.createElement("div", "footer");
  footer.textContent = "This isn't a real restaurant";

  domMethod.appendChildren(content, header, contentBody, footer);
}

export default function initPage() {
  makePageShell();
  insertHomeContent();
}
