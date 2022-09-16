import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContacts } from "./contact";

function createHeader() {
  const header = document.createElement("header");
  const name = document.createElement("h1");

  name.textContent = "BEEF";
  header.appendChild(name);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  const navBar = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact Us";

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);
  return navBar;
}

function createFooter() {
  let footer = document.createElement("footer");
  footer.textContent = "Copyright © 2022";
  return footer;
}

(() => {
  const content = document.querySelector(".content");
  let container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(createHeader());
  content.appendChild(loadHome());
  content.appendChild(loadMenu());
  content.appendChild(loadContacts());
  content.appendChild(createFooter());
})();

let btns = document.querySelectorAll("button");
btns.forEach((button) => {
  button.addEventListener("click", populateMain);
});

function populateMain(e) {
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const contact = document.querySelector(".contacts");

  if (home.style.display !== "none") home.style.display = "none";
  else if (menu.style.display !== "none") menu.style.display = "none";
  else contact.style.display = "none";

  if (this.textContent === "Home") home.style.display = "flex";
  else if (this.textContent === "Menu") menu.style.display = "flex";
  else contact.style.display = "flex";
}
