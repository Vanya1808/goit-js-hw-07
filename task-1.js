"use strict"

//////////////1\\\\\\\\\\\\\\\
const lentghList = document.getElementsByClassName('item').length;
console.log(`В списке ${lentghList} категории`);

const ulCategories = Array.from(document.querySelector('#categories').children);
for (let elem of ulCategories) {
    let category = elem.firstElementChild.textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
};

