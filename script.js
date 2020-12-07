'use strict';
const hexColor = document.querySelector('#color'),
    genButton = document.querySelector('#genNew');

const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    hexColor.innerHTML = `#${randomColor}`;
}

genButton.addEventListener("click", setBg);
setBg();