'use strict';

const advert = document.querySelector(".adv");
const book = document.querySelectorAll(".book");
const book2 = book[0];
const book1 = book[1];
const book6 = book[2];
const book4 = book[3];
const book3 = book[4];
const book5 = book[5];

const chaptersBook5 = book5.querySelectorAll("li");
const chapter1Book5 = chaptersBook5[9];
const chapter4Book5 = chaptersBook5[2];
const chapter2Book5 = chaptersBook5[3];
const chapter5Book5 = chaptersBook5[6];
const chapter6Book5 = chaptersBook5[7];
const annexABook5 = chaptersBook5[5];

const chaptersBook2 = book2.querySelectorAll("li");
const annexCBook2 = chaptersBook2[2];
const chapter1Book2 = chaptersBook2[3];
const chapter2Book2 = chaptersBook2[6];
const annexABook2 = chaptersBook2[7];
const chapter3Book2 = chaptersBook2[8];
const annexBBook2 = chaptersBook2[9];
const annexDBook2 = chaptersBook2[10];

const book3Title = book3.querySelector("a");

const chapter8Book6 = document.createElement("li");
const chaptersBook6 = book6.querySelectorAll("li");
const annexAbook6 = chaptersBook6[9];

//убрать рекламу
advert.remove();

//книги в правильном порядке
book2.before(book1);
book4.before(book3);
book5.after(book6);

//главы книги 5 в правильном порядке
chapter5Book5.before(chapter4Book5);
chapter2Book5.before(chapter1Book5);
chapter6Book5.after(annexABook5);

//главы книги 2 в правильном порядке
annexDBook2.before(annexCBook2);
annexBBook2.before(annexABook2);
chapter1Book2.after(chapter2Book2);
chapter2Book2.after(chapter3Book2);

//сменить фон
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

//сменить заглавие главы 3
book3Title.textContent = "Книга 3. this и Прототипы Объектов";

//главу 8 в книге 6 поставить на место
chapter8Book6.textContent = "Глава 8: За пределами ES6";
annexAbook6.insertAdjacentElement("beforebegin", chapter8Book6);
