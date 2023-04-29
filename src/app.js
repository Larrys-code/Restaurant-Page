import "./styles.css";
import * as domMethod from "./domMethod";

console.log("hello");
const content = document.getElementById("content");
console.log(content);
domMethod.appendChildArray(content, [
  domMethod.createElement("div", ["test", "test4"]),
  domMethod.createElement("div"),
]);
