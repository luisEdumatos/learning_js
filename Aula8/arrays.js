/* let animais = ['cachorro', 'gato', 'girafa', 'cavalo'];
console.log(animais);  */

/* let idiomas = new Array('Ingles', 'Portugues', 'Espanhol');
console.log(idiomas); 
let ingles = idiomas[0];
console.log(ingles);  
let tamanho = idiomas.length; 0
console.log(tamanho);
 */

//Array com multiplos valores distintos
/* let array = ['Teste', true, 2];
console.log(array);
console.log(Object.keys(array)); //Retorna as chaves (index) dos valores existentes
console.log(Object.values(array)); //Retorna os valores do array */

//Definir o tamanho do Array
/* let arr2 = Array(5); //Array de tamanho 5
arr2[6] = 'A'; //funciona
console.log(arr2); */

//Inserindo dados com Push (Insere no final)
/* let array = ['Teste', true, 2];
array.push(25, 'Luis');
console.log(array); */

//Inserindo dados com SPREAD OPERATOR
let arr5 = ['C', 'D']; 
let arr6 = ['A', 'B', ...arr5, 'E', 'F'];
console.log(arr6);

//Removendo dados com Pop (Remove do final: Last In First Out)
arr6.pop();
console.log(arr6);

//Removendo dados com Shift (Remove do inicio: First In First Out)
arr6.shift();
console.log(arr6);

//Inserindo dados com Unshift (Insere dados no começo da lista)
arr6.unshift('A');
console.log(arr6);

//Unindo Arrays com o Concat
const array1 = ['A', true, 2]; 
const array2 = ['B', false, 1]; 

let newArray = array1.concat(array2);
let newArray2 = array2.concat([1,2,3]); 

console.log(newArray); 
console.log(newArray2);

