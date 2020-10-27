export default function(){
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};



const bodyEl = document.querySelector('body');
bodyEl.classList.add(Theme.LIGHT);
//localStorage.setItem('Theme', Theme.LIGHT)

const inputEl = document.querySelector(`#theme-switch-toggle`);
const inputElClick = inputEl.addEventListener('change', inputClick);


populateTheme();

/*При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.*/
function inputClick(evt) {
    evt.preventDefault();
    bodyEl.classList.toggle(Theme.DARK),
        bodyEl.classList.toggle(Theme.LIGHT)
    //console.log(bodyEl.className);
    if (bodyEl.className !== Theme.LIGHT) {
        localStorage.setItem('Theme', Theme.DARK)
    } else {
        localStorage.setItem('Theme', Theme.LIGHT)

    }
}
/*Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй */
function populateTheme() {
    const savedTheme = localStorage.getItem('Theme');
    if (savedTheme) {
        console.log(savedTheme);
        bodyEl.classList = savedTheme;
        inputEl.checked = savedTheme == Theme.DARK ? true : false;
    }
}



/*Вариант 2
function inputClick(evt) {
    if (evt.target.checked) {
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        bodyEl.classList.add(Theme.LIGHT);
     bodyEl.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}
*/ }  