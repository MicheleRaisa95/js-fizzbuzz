'strict'

// creo la costante ul 
const ul = document.querySelector('ul.list');

// aggiungo ul al body
document.body.append(ul)

// creazione del cilc for

for (let i = 1; i <= 100; i++) {

    let content = ""; // Contenuto da inserire nella lista

    // istruzioni condizionali

    // stabilisce se un numero e multiplo di 3
    
    if (i % 3 === 0 && i % 5 === 0) {

        // mostra nel dom la parola FizzBuzz

        content = 'FizzBuzz'

        // stampa in console FizzBuzz

        console.log('FizzBuzz')

    } else if (i % 5 === 0 ) {

        // mostra nel dom la parola Buzz

        content = 'Buzz'

    // stampa in console la parola Buzz

    console.log('Buzz')

    // stabilisce se un numero e multiplo sia di 3 che di 5

} else if (i % 3 === 0) {

    // mostra nel dom la parola Fizz

    content = 'Fizz'

    // satmpa in console la parola Fizz

    console.log('Fizz')

     // stabilisce se un numero e multiplo di 5
    } else {

        // mantiene visibili i valori nella lista

        content = i 

    // stampa in console i numeri che non sono multipli

    console.log(i)
}

// creo gli elementi li

const listItem = document.createElement("li");
listItem.textContent = content

// unione di listItem con ul

ul.append(listItem)
}