import loadHomePage from './homePage';
import loadMenu from './menu';
import loadContact from './contact';

function navigation(){
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    home.addEventListener('click', loadHomePage);
    menu.addEventListener('click', loadMenu);
    contact.addEventListener('click', loadContact);
}

navigation();
loadHomePage();