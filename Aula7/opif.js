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