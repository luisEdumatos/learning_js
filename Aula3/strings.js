//Concatenacao de Strings
/* let nome = 'Luis Eduardo ';
let sobrenome = 'de Matos';

console.log(nome + sobrenome);  */

//Textos e numeros
/* let num1 = 1; 
let num2 = "1"; 
console.log(num1 + num2); //JavaScript entende que é um texto pois uma das variaveis é textual
console.log(num1 + 1); //JavaScript entende como um numero pois os dois tipos são numericos*/

//Para evitar problemas com textos + numeros, utiliza-se o metodo concat para garantir que soma de numeros será textual
/* let str1 = "0 "; 
let str2 = "plus"; 
let str3 = " 1 = "; 
let num1 = 1; 

let res = str1.concat(str2, str3, num1); 
console.log(res);  */

//Concatenacao com template literals
/* let str1 = "JavaScript";
let str2 = "legal"; 

console.log(`Escrevendo codigos em ${str1} e é ${str2}`); */

//Expressoes com template literals
/* let bool1 = true;

const getValue = (num) => {
    return num + num;
}
console.log(`O oporto de true é ${!bool1}`); //Negando em um literals
console.log(`1 + 1 é ${1 + 1}`); //Operando em literals
console.log(`Resultado: ${getValue(10)}`); //chamada de funcao no literal; */