
const numberOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfCategories.length}`);

const categories = document.querySelectorAll('.item');

categories.forEach((element) => {
    const h2Element = element.querySelector('h2');
    console.log(`Category: ${h2Element.textContent}`);
    const liElements = element.querySelectorAll('li');
    console.log(`Elements: ${liElements.length}`);
} );