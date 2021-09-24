import menu from './menu.json';
import cards from './templates/markup.hbs';

//===========================================\\

console.log(cards({menu}))

const main = document.querySelector('.js-menu');
const menuMarkup = createTheme(menu);

main.insertAdjacentHTML('beforeend', menuMarkup);

function createTheme(menu) {
  return cards(menu);
}

//===========================================\\
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');
const light = Theme.LIGHT;
const dark = Theme.DARK;
let local = localStorage.getItem('theme');
cache();

checkbox.addEventListener('change', ChangeTheme);

function ChangeTheme(e) {
  e.preventDefault();

  if (!e.target.checked) {
    toggleMain(light, dark);
    localStorage.setItem('theme', light);
  }
  else if (e.target.checked) {
    toggleMain(dark, light);
    localStorage.setItem('theme', dark);
  }
}

  function toggleMain(thisColor, futureColor) {
    document.body.classList.remove(futureColor);
    document.body.classList.add(thisColor);
  }
  function cache() {
    if (local === null) {
      return;
    }
    if (local === light) {
      document.body.classList.add(light);
      checkbox.checked = false;
    } else {
      document.body.classList.add(dark);
      checkbox.checked = true;
    }
  }