//Negacao
const active = true; 
if(!active) { 
    console.log('IF!');
} else { 
    console.log('Else');
}

//If Aninhado
const status = 200; 
if (status === 200) { 
    console.log('OK!'); 
} else if (status === 400) {
    console.log('Error!'); 
} else { 
    console.log('Unknown Status');
}

//Operador Ternario
const st = 200; 
const message = (status === 200) ? 'OK' : 'Error'; 
console.log(message);

//Comparando String
const name = "Luis"; 
if (name === "luis") { 
    console.log('IF!'); 
} else { 
    console.log('Else'); 
}

//Operador Logico && e OU (||) 
const sta = 400; 
const sta2 = false; 
if (sta === 400 || sta2 === true) {
    console.log('IF!');
} else { 
    console.log('Else'); 
}

/*
Maior = > 
Menor = < 
MaiorOuIgual = >=
MenorOuIgual = <= 
Diferente = !==
*/

//Logica Booleana (Todos valores abaixo são considerados false na logica booleana)
const x = 0; 
const y = null; 
const z = undefined; 
const w = ""; 

console.log(Boolean(x));
console.log(Boolean(y));
console.log(Boolean(z));
console.log(Boolean(w));

//Switch-Case
const test = 200;
switch(test) {
    case 200: 
        console.log('OK!'); 
        break;
    case 400:
    case 500: 
        console.log('Error');
        break;
    default:
        console.log('Unknown value');
        break;             
} 

