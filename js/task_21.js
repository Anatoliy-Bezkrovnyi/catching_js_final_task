'use strict';

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const headers = document.querySelectorAll('.item h2');
for (const header of headers) {
  console.log(`Category: ${header.textContent}`);
  const list = header.nextElementSibling;
  console.log(`Elements: ${list.children.length}`);
}