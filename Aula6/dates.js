let data = new Date(); 
console.log(data);

const ahora = new Date(2021, 8, 25, 14, 50, 51);
console.log(ahora);

console.log(new Date(2050, 0, 9));

ahora.setFullYear(2800);
ahora.setMonth(5); 
ahora.setHours(8);
ahora.setMinutes(43); 
console.log(ahora); 
 
const mydate = new Date(); 
const m = mydate.getMonth()+1;
const y = mydate.getFullYear(); 
const d = mydate.getDate(); 

console.log(`${d}/${m}/${y}`);