const nomes = ['Jose', 'Joao', 'Luis']; 
const data = [
    {name: 'Jose', active: true}, 
    {name: 'Joao', active: false},
    {name: 'Luis', active: true}
];


//While no Array
/* let index = 0; 
while (index < nomes.length) { 
    console.log(nomes[index]); 
    index++; 
} */

//While na colecao
/* let index = 0; 
while (index < data.length) { 
    console.log(data[index].name); 
    index++; 
} */

//For no Array
/* for (let index = 0; index < nomes.length; index++) { 
    console.log(nomes[index]);
} */

//For na colecao
/* for (let index = 0; index < data.length; index++) { 
    console.log(data[index].name); 
} */

//For..OF
/* for (let n of nomes) { 
    console.log(n); 
} */

for (let d of data) { 
    console.log(d.name); 
}