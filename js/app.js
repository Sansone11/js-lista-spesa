console.log('JS ok');
const listaSpesa = ['pane 60g', 'latte 1lt', 'uova 6', 'sale 1kg', 'pepe 50g', 'pasta 500g', 'mele 6', 'miele 1l', 'farina 1kg',]
console.log(listaSpesa);
 //creo una variabile dichiaro un elemento da id che voglio utilizzare nell html
 const text = document.getElementById('for');
// condizione per ogni valore di i iferiore a length somma 1
for (let i = 0; i < 9; i++) {
    //attacco in html il valore dell'indice in un list item html    
    text.innerHTML += "<li>" + (listaSpesa [i]) + "</li>";
}

let i = 0;
 //creo una variabile dichiaro un elemento da id che voglio utilizzare nell html
 const textList = document.getElementById('opposite');
// condizione i deve essere minore delle length di listaspesa
while (i < listaSpesa.length) {
   
    //attaacco in html il valore dell'indice in un list item html  
    textList.innerHTML += "<li>" + (listaSpesa[i]) + "</li>";
    i++;
}




