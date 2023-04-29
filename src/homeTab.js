import * as domMethod from "./domMethod";

const pageList = ["Home", "Menu", "About Us"];

function makePageShell() {
  const container = domMethod.createElement("div", "container");
}
function insertHomeContent() {}

export default function initPage() {
  makePageShell();
  insertHomeContent();
}
