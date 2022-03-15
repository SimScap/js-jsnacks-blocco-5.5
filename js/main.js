/**
 * 
 * 
zucchine = 
[
{
    varietà : 'Zucchino nero di Milano',
    peso: '800',
    lunghezza:'31',
},
{
    varietà : 'Zucchino romanesco',
    peso: '200',
    lunghezza:'18',
},
{
    varietà : 'Zucchino ortolano di Faenza',
    peso: '400',
    lunghezza:'16',
},
{
    varietà : 'Zucchina lunga fiorentina',
    peso: '110',
    lunghezza:'14',
},
{
    varietà : 'Zucchino siciliano',
    peso: '340',
    lunghezza:'27',
},
{
    varietà : 'Zucchina striata di Napoli',
    peso: '280',
    lunghezza:'22',
},
{
    varietà : 'Zucchina bianca triestina',
    peso: '220',
    lunghezza:'19',
},
{
    varietà : 'Zucchina rigata pugliese',
    peso: '290',
    lunghezza:'24',
},
{
    varietà : 'Zucchino tondo di Piacenza',
    peso: '700',
    lunghezza:'29',
},
{
    varietà : 'Zucchino tondo di Nizza',
    peso: '110',
    lunghezza:'15',
}
];
const zucchineMature = [];
const zucchineAcerbe = [];
const lateZucchineWeight = [];
const earylZucchineWeight = [];

let latezucchi
let sum = 0;
zucchine.forEach(element => {
    sum+= element.peso;
    if (element.lunghezza > 15){
        zucchineMature.push(element);
        lateZucchineWeight += element.peso;
    } else {
        zucchineAcerbe.push(element);
        earylZucchineWeight += element.peso;
    }
});
 */


//A
/**
 * function reverse(s){
    return s.split("").reverse().join("");
}
var reverse = reverse("Ciao")
console.log(reverse);

function reverseNumber(n){
    return n.split("").reverse().join("");
}

var reverseN = reverseNumber(number)
console.log(reverseN);


const lista = [1,23,45,65,45,67,22,445,667,545, "Ciao","wasd","asd","rofl","lol",]

const newList = lista.map((element) =>)
 * 
 */


let a, b, rest;
[a, b] = [10, 20];

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); 
console.log(b); 
console.log(rest); 