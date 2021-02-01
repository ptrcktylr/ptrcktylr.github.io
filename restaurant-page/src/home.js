import { content, createHTMLElement, } from "./index";

function render() {
  // main container
  const main = createHTMLElement("main", "home", null, null);

  // left panel
  const left_panel = createHTMLElement("div", "left-panel", null, null);
  const left_panel_content1 = createHTMLElement("p", "top", null, "100%");
  const left_panel_content2 = createHTMLElement("p", "mid", null, "Vegan & Organic");
  const left_panel_content3 = createHTMLElement("p", "bot", null, "since 2021");

  // right panels
  const top_right_panel = createHTMLElement("div", "top-right-panel", null, null);
  const top_right_panel_header = createHTMLElement("p", "top-right-panel-header", null, "carbon-neutral farming");

  const bot_right_panel = createHTMLElement("div", "bot-right-panel", null, null);
  const bot_right_header = createHTMLElement("div", "bot-right-header", null, null);
  const bot_right_panel_content1 = createHTMLElement("p", "top", null, "drone delivery");
  const bot_right_panel_content2 = createHTMLElement("p", "bot", null, "now available");


  left_panel.appendChild(left_panel_content1);
  left_panel.appendChild(left_panel_content2);
  left_panel.appendChild(left_panel_content3);

  top_right_panel.appendChild(top_right_panel_header);

  bot_right_header.appendChild(bot_right_panel_content1);
  bot_right_header.appendChild(bot_right_panel_content2);
  bot_right_panel.appendChild(bot_right_header);

  main.appendChild(left_panel);
  main.appendChild(top_right_panel);
  main.appendChild(bot_right_panel);

  content.appendChild(main);
}



export { render as renderHome };