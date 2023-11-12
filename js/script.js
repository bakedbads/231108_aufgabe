"use strict";

const vorname = 'Koi';
const text = 'Todos von ' + vorname;

document.getElementById("title").innerHTML = text;

// NEUE KLASSE FÜR 1 KINDELEMENT ZUORDNEN

const secondLi = document.querySelector('ul').children[1];
secondLi.classList.add('done');

// NEUES LISTENITEM HINZUFÜGEN

const ul = document.querySelector('ul');

const newlistitem = 'Schlafen';

ul.appendChild(document.createElement('li')).innerHTML = newlistitem;

// ERSTES LISTENITEM LÖSCHEN

ul.children[0].remove();

// HINTERGRUNDFARBE ÄNDERN

ul.children[4].style.backgroundColor = 'red';



