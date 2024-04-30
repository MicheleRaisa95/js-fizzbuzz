'strict'

// creazione del cilc for

for (let i = 1; i <= 100; i++) {
    // istruzioni condizionali
    // stabilisce se un numero e multiplo di 3
    if (i % 3 === 0 && i % 5 === 0) {
        // stampa in console FizzBuzz
        console.log('FizzBuzz')
    } else if (i % 5 === 0 ) {
    // stampa in console la parola Buzz
    console.log('Buzz')
    // stabilisce se un numero e multiplo sia di 3 che di 5
} else if (i % 3 === 0) {
    // satmpa in console la parola Fizz
    console.log('Fizz')
     // stabilisce se un numero e multiplo di 5
    } else {
    // stampa in console i numeri che non sono multipli
    console.log(i)
}
}


