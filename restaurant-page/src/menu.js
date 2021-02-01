import { content, createHTMLElement, } from "./index";

function render() {
  // main container
  const main = createHTMLElement("main", "menu", null, null);
  const container = createHTMLElement("div", "menu_container", null, null);

  // dishes
  for (let i = 0; i < 12; i++) {
    const food_image = createHTMLElement("div", `item-${i}-image`, ["food-image"], null);
    const food_description = createHTMLElement("p", `item-${i}-description`, ["food-description"], null);
    const food_container = createHTMLElement("div", `item-${i}-container`, ["food-item-container"], null);
    
    food_container.appendChild(food_image);
    food_container.appendChild(food_description);

    container.appendChild(food_container);
  }

  main.appendChild(container);
  content.appendChild(main);
}


export { render as renderMenu };