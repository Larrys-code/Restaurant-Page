export function createElement(type, classList = [], id = false) {
  const newElement = document.createElement(type);
  classList.forEach((className) => {
    newElement.classList.add(className);
  });
  if (id) {
    newElement.setAttribute("id", id);
  }
  return newElement;
}

export function appendChildArray(target, childArray = []) {
  childArray.forEach((child) => {
    target.appendChild(child);
  });
}
