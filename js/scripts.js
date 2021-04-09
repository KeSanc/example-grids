'use strict';

let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu-bar');

/*FORMA DE KEVIN */
/* 
menu_bar.addEventListener('click', () => {
    if (menu.classList.contains('menu-toggle')) {
        menu.classList.remove('menu-toggle');
    } else {
        menu.classList.add('menu-toggle');
    }
});*/

/*FORMA DEL VIDEO */

menu_bar.addEventListener('click', () => {
    /*AÑADE LA CLASE EN CUESTION SI ES QUE NO ESTÁ , LA ELIMINA SI ES QUE EXISTE*/
    menu.classList.toggle('menu-toggle');
});