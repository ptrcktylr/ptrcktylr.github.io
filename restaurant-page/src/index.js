import {renderNav} from "./navbar";
import {renderHome} from "./home";
import {renderMenu} from "./menu";
import {renderAbout} from "./about";
import {renderFooter} from "./footer";

const content = document.getElementById("content");

function createHTMLElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
}

function home() {
  content.innerHTML = "";
  renderNav();
  renderHome();
  renderFooter();
}

function menu() {
  content.innerHTML = "";
  renderNav();
  renderMenu();
  renderFooter();
}

function about() {
  content.innerHTML = "";
  renderNav();
  renderAbout();
  renderFooter();
}


home();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "HOME") home();
  if (target === "MENU") menu();
  if (target === "ABOUT") about();
});

export { createHTMLElement, content }