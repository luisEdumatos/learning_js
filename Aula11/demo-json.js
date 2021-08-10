
//Objeto book
const book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isAvailable: true
}

//JSON stringify (De objeto para JSON)
const bookToJson = JSON.stringify(book);
//console.log(bookToJson); 

//JSON parse (De Json para objeto)
const jsonObjt = JSON.parse(bookToJson); 
console.log(jsonObjt);