//Tipos de dados em JavaScript

//Number
let idade = 25; 
console.log(idade); 

//Float
let precoMouse = 19.99; 
console.log(precoMouse); 

//String
let nome = "Luis"; 
console.log(nome);

//Boolean
let nomeVerdadeiro = true; 
console.log(nomeVerdadeiro); 
let nomeFalso = false; 
console.log(nomeFalso); 

//Date
let dataHoje = new Date(); 
console.log(dataHoje);              

//Function
let resultado = adicionarNumeros(5,2);
function adicionarNumeros(num1, num2) {
    return num1 + num2; 
}
console.log(resultado); 

//Array
let frutas = ["Banana", "Morango", "Abacaxi"]; 
console.log(frutas); 

//Object
const pessoa = {
    nome: "Luis Eduardo",
    sobrenome: "de Matos",
    idade: 25
}; 
console.log(pessoa); 

//Null
let variavelQualquer = null; 
console.log(variavelQualquer);

//Undefined
let carro; 
carro = undefined;
console.log(carro); 

//typeof
console.log(typeof 1); 
console.log(typeof 'Luis Eduardo');

//instanceof
class Carro {};
let car = new Carro(); 
console.log(car instanceof Carro); 

//Igualdade Estrita (compara tipo e valor) (Como boa pratica, sempre utilizar comparação de igualdade Estrita)
console.log(20 === 20); 
console.log('20' === 20);

//Igualdade Solta (Compara valores)
console.log(20 == 20); 
console.log('1' == 1); 