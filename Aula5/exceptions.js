/* let erroEncontrato = null; 

try {
    let obj = undefined; 
    console.log(obj); 
    console.log(obj.propriedade);
    console.log('Teste'); 
    erroEncontrato = false; 
} catch (error) {
    console.log('[Erro]'); 
    console.log(error); 
    erroEncontrato = true; 
} finally { 
    erroEncontrato = null; 
    console.log('Finalizando o programa'); 
}

console.log(erroEncontrato);
 */
let i = 0;
while (i<3) { 
    try{
        console.log('iniciando calculadora'); 
        let input = 0; 
        if (input === 0) { 
            throw 'Valor negado';
        }
        let res = 5/input; 
    } catch (e) { 
        i++;
    } finally { 
        console.log('finalizando calculadora');
    }
}