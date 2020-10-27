import theme from './theme';
import menuCardTpl from './templates/menu_template.hbs';
import menuItem from './menu.json';
import './styles.css';

theme();
const menuCardUl = document.querySelector('.js-menu');


const createMenu = createMenuCardMarkup(menuItem.menuItem);
menuCardUl.insertAdjacentHTML("beforeend", createMenu);

function createMenuCardMarkup(menuItem) {
    return  menuItem.map(menuCardTpl).join('');
}




