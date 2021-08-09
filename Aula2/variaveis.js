/*Variaveis e seus contextos*/

//var
/*
Declara uma variavel onde é possivel adicionar um valor inicial
Utiliza-se em funções com escopo
Depois das novas normas do ECMAScript, já não é mais tão utilizada
*/ 

//let
/*
Declara uma variavel local no escopo do bloco atual opcionalmente iniciando com determinado valor
Utilizações principais em um escopo local
*/ 

//const
/*
Cria uma variavel de valor fixo. Após adicionar um valor, não pode ser alterada. 
Pode pertencer ao escopo local ou global
*/

//utilização habitual
/*
const é usado como padrão nos blocos e funcoes
let é usado dentro de laços de repeticao
*/

//Exemplo de uso do VAR
/* var nome = 'Luis Eduardo';
console.log('Meu nome é: ', nome);
 */
/* function imprimirNome() { 
    var nome = 'Marly Matos'; 
}
//console.log('Nome: ', nome); Não funciona pois o var tem escopo local 
imprimirNome(); */

//Exemplo de uso do LET
/* function imprimirIdade() { 
    for(let idade = 25; idade <= 50; idade++) {
        console.log('Idade dentro do for...:', idade); 
    }
    //console.log('Idade dentro do for...:', idade); Não funciona pois o let tem escopo local no for
}
imprimirIdade(); */

//Exemplo de uso do CONST
/* function imprimirIdade() { 
    for(const idade = 25; idade <= 50; idade++) {
       // console.log('Idade dentro do for...:', idade); 
    }
    console.log('Idade dentro do for...:', idade); 
}
imprimirIdade();  *///Não funciona pois o const não pode ser alterado na operação idade++

const pessoa = { 
    nome: 'Luis Eduardo',
    idade: 25
}

function imprimirDadosPessoa() { 
    console.log(`Nome...: ${pessoa.nome} e a idade é...: ${pessoa.idade}`)
}
imprimirDadosPessoa(); //Variavel constante e previsivel, não alteravel