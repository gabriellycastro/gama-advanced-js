const books = require('./database')
const readline = require('readline-sync')

function showCategories() {
    const findCategories = books.map(book => book.category);

    const categories = findCategories.filter(function(category, i) {
        return findCategories.indexOf(category) === i;
    });

    console.log(categories);
}

function searchByCategory() {
    console.log('These are the available categories:');
    showCategories()

    const categoryInput = readline.question('Which category will you choose?');
    const chosenCategory = books.filter(book => book.category === categoryInput);

    if (chosenCategory == "") {
        console.log('Category not found, try again');
    } else {
        console.table(chosenCategory);
    }
}

const firstInput = readline.question('Would you like to search for a book? (Y/N)')

if (firstInput.toLocaleUpperCase() === "Y") {
    searchByCategory()

} else if (firstInput.toLocaleUpperCase() === "N") {
    const orderByPageCount = books.sort((a,b) => a.pageCount - b.pageCount)

    console.table(orderByPageCount);
} else {
    console.log('Inserction not recognized, try again');
}