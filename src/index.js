import {loadHome} from "./home";


const content = document.querySelector('.content');
let container = document.createElement('div');


function createHeader () {
    const header = document.createElement('header');
    const name = document.createElement('h1');


    name.textContent = 'BEEF';
    header.appendChild(name);
    header.appendChild(createNav());
    return header;
}

function createNav (){
    const navBar = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact Us';

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar;
}

container.classList.add('container');

content.appendChild(createHeader());
content.appendChild(container);
content.appendChild(loadHome());