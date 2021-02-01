import { content, createHTMLElement, } from "./index";

function render() {
  const nav = document.createElement("nav");
  const left_nav = createHTMLElement("div", "left_nav", null, null);
  const right_nav = createHTMLElement("div", "right_nav", null, null);

  // right nav links
  const nav_items = ["home", "menu", "about"];
  nav_items.forEach((item) => 
    right_nav.appendChild(createHTMLElement("a", `${item}_link`, null, item))
  );

  // left nav logo
  const logo = createHTMLElement("p", "logo", null, "green burgers");
  left_nav.appendChild(logo);

  // adding navs to parent element
  nav.appendChild(left_nav);
  nav.appendChild(right_nav);
  content.appendChild(nav);
}

export { render as renderNav };