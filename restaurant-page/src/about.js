import { content, createHTMLElement, } from "./index";


function render() {
  const main = createHTMLElement("main", "about", null, null);
  const header = createHTMLElement("h1", "header", null, "Why choose Green Burger?");
  const body = createHTMLElement("p", "choose-us", null, 
  "At Green Burger, we dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper mauris at turpis bibendum convallis. In tempor et metus ut molestie. Aliquam accumsan nibh justo, sed consectetur arcu congue et. Proin interdum auctor massa ac sollicitudin. Aliquam interdum placerat dictum. Mauris convallis massa quis placerat lobortis. Fusce pellentesque nisi eu congue fermentum. Integer non massa placerat, tempus massa ut, efficitur velit. Donec in pharetra libero, vel gravida nulla. Curabitur lectus nisl, semper eget augue quis, mattis euismod urna. Integer vitae hendrerit ligula, vel fringilla leo. Quisque convallis tellus a dolor ultricies, id consequat lacus commodo.");

  main.appendChild(header);
  main.appendChild(body);

  content.appendChild(main);
};






export { render as renderAbout };