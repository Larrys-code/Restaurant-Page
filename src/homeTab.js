import * as domMethod from "./domMethod";

export const content = document.getElementById("content");
function insertHomeContent() {}

const pageList = [
  { name: "Home", method: insertHomeContent },
  { name: "Menu" },
  { name: "About Us" },
];

function makePageShell() {
  const header = domMethod.createElement("div", "header");
  pageList.forEach((page) => {
    const pageTab = domMethod.createElement("button", ["tab", `${page.name}`]);
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
