'strict'

const ul = document.querySelector('ul.list');
// ciclo creazione numeri
for (let i = 1; i <= 100; i++) {
let content = "";
if (i % 3 === 0 && i % 5 === 0) {
    content = 'FizzBuzz';
} else if (i % 5 === 0) {
    content = 'Buzz';
} else if (i % 3 === 0) {
    content = 'Fizz';
} else {
    content = i;
}
const listItem = document.createElement("li");
listItem.textContent = content;
// fine ciclo creazione numeri

// condizionale per aggiungero lo sfondo in base al contenuto
if (typeof content === 'number') {
    listItem.classList.add('number');
} else if (content === 'Fizz') {
    listItem.classList.add('fizz');
} else if (content === 'Buzz') {
    listItem.classList.add('buzz');
} else if (content === 'FizzBuzz') {
    listItem.classList.add('fizzbuzz');
} else {
    listItem.classList.add('word');
}
ul.append(listItem);
}