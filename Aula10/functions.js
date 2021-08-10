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

//fatorial normal
const fatorial = (num) => { 
    let result = num; 
    while (num > 1) { 
        num--;
        result *= num; 
    }
    return result; 
}

console.log(fatorial(5));

//fatorial recursivo
const fatRecursive = (num) => { 
    if (num < 1) { 
        return false; 
    }
    return num * fatorial (num - 1); 
}

console.log(fatRecursive(5));


//Fibonacci

const fibo = (num) => { 
    let num1 = 1; 
    let num2 = 1;
    let aux = 0;  
    while (aux < num) { 
        aux = num1 + num2;
        num1 = num2;  
        num2 = aux; 
        console.log(aux); 
    }
}
fibo(2); 