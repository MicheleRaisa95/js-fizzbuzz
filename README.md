//esercizio

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

La prima cosa da fare per svolgere l'esercizio è stabilire quando un numero di 3, 5 e di 3 e 5. per fare questo possiamo usare l'operatrore %
dunaque avremo delle operazioni come le seguenti:

1 % 3 o 1 % 5 
2 % 3 o 2 % 5
3 % 3 o 3 % 5----- in questo caso abbiamo resto 0 perchè multiplo do 3
4 % 3 o 4 % 5
5 % 3 o 5 % 5----- in questo cso abbiamo resto 0 perchè multiplo di 5
[...]
15 % 3 o 15 % 5----- in questo caso abbiamo resto 00 perche multiplo sia di 3 che di 5 

noi possiamo far capire al nostro applicativo che un numero e multiplo di un altro numere se come resto della divisione ha 0, la nostra operazione avra un aspetto simile a n % 3 === 0 e n % 5 === 0.

Dal momento che noi vogliamo che sia l'applicativo a fare il lavore sporco ovvero scrivere i numeri da 1 a 100 e a stabilire se il numero sia un multiplo usero i cicli con keyword "for", al quale assegneremo un contatore che avra valore iniziale 1 (non ssegneremo 0 come valore iniziale perche altrimenti i numeri stampati in console si fermerebbero a 99 e noi vogliamo che i numeri siano da 1 a 100!!), poi impostiamo un una condizione da verificare per eseguire il codice <=100, infine, si incrementa il valore del contatore che dovra essere testato al giro successivo.

recapitoalndo:

1. Creo una variabile che chiamo i e assegni il valore di 1 i = 1
2. stabilisco la condizione i <= 100
3. incremento i++

dunque scriveremo for (let i = 1; i < 100; i++)

ora dobbiamo unire al nostro ciclo la condizione per cui sappia capire se un numero e multiplo di un  altro numero per fare cio useremo le istruzioni condizionale if, else if, else:

if (i % 3 === 0)----- stabilisce se un numero e multiplo di 3
console.log ('Fizz') mostrera in console la parola fizz al posto dei numeri

else if (i % 5 === 0) stabilisce se un numero e multiplo di 5
console.log ('Buzz') mostrera in console buzz se un numero e multiplo di 5

else if (i % 3 === 0 && i % 5 === 0) stabilisce se un numero e multiplo sia di 3 che di 5
console.log ('FizzBuzz') se un numero e multiplo sia di3 che di 5 
[IMPORTANTE QUESTA DEVE ESSERE LA PRIMA PARTE DELLA CONDIZIONALE ]
else 
console.log (i) stampera in console gli altri numeri 


BONUS 1

per colpletare il bonus 1 preocedero in questo modo crero nella pagina html un tag ul che fungera da contenitore.
in questo esercizio avro soltanto un unica lista e quindi posso usare ul come costante aggiungendo il querySelector dunque avremo una formula del genere: 

const ul = document.querySelector('ul.list');

in questo mood abbiamo selezionato la nostra lista non orsina per le modifiche da apportare

dopo di che devo iserire la lista all'interno del body tramite 

document.body.append()

all'interno del ciclo for 
deve assegnare a content la costante i cosi che possa stampare nel dom i numeri e parole genrate

devi creare la costante list item e creare nel documento gli li

const listItem = document.createElement(')

fatto cio stabilisco che list item e uguale a content cosi che vengano mostrti i numerie  etesti come elementi di una lista 

infine aggiugo listitem all'iterno del suo contenitore in quetso caso ul

ul.append()