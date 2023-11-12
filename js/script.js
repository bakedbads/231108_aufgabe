"use strict";

let vorname = 'Koi';
let text = 'Todos von' + vorname;
const vorname = 'Koi';
const text = 'Todos von ' + vorname;

document.getElementById("title").innerHTML = text;

const secondLi = document.querySelector('ul').children[1];
secondLi.classList.add('done');
