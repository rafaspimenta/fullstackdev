import {toggleHiddenElement} from '../modules/dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});