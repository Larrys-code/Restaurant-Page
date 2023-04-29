import "./styles.css";
import * as domMethod from "./domMethod";

const content = document.getElementById("content");
domMethod.appendChildren(
  content,
  domMethod.createElement("div", ["test", "test4"]),
  domMethod.createElement("div")
);
