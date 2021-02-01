import { content, createHTMLElement, } from "./index";

function render() {
  const footer = document.createElement("footer");
  const copyright = createHTMLElement("p", "copyright", null, "Copyright © 2077 Green Burgers Inc. All rights reserved.");
  const links = createHTMLElement("div", "footer-links", null, null);

  const link_items = ["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal"];
  link_items.forEach((link) => {
    links.appendChild(createHTMLElement("p", null, null, link));
  });

  footer.appendChild(copyright);
  footer.appendChild(links);

  content.appendChild(footer);
}

export { render as renderFooter };