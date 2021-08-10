//Exemplo 1
function raizQuadrada(numero) { 
    return Math.sqrt(numero); 
}

console.log(raizQuadrada(9)); 

//Exemplo 2

function valorProdutoDesconto(preco, desconto) { 
    let resultado = preco * desconto; 
    console.log(`Você economizou ${resultado} reais`);
    return preco - resultado; 
}

console.log(valorProdutoDesconto(50, 0.2));

//Exemplo 3
function conversorCelsiusParaFahrenheit(celsius) {
    let fanhrenheit = celsius * 9/5 + 32; 
    return fanhrenheit; 
}

console.log(conversorCelsiusParaFahrenheit(40)); 

//Arrow Functions
const add = (a, b) => a + b; //Retorno implicito
console.log(add(1 ,2));

const sub = (a, b) => { 
    return a - b; 
}; //Retorno explicito
console.log(sub(2,1)); 