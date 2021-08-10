//Exemplo
const book = { 
    title: 'Elonquent JavaScript', 
    author: 'Marijn Haverbeke', 
    isAvailable: true, 

    checkIn: function() { 
        this.isAvailable = true; 
    }, 

    checkOut: function() { 
        this.isAvailable = false; 
    }
}

//Usando construtor New
const book2 = new Object(); 
book2.title = '1984';
book2.author = 'George Orwell'; 
book2.isAvailable = true; 

console.log(book); 
console.log(book2);