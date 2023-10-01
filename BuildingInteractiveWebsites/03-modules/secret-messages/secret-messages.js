import resources from "../modules/dom-functions.js";

const { toggleHiddenElement } = resources;

/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
});