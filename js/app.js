console.log('JS ok');
const listaSpesa = ['pane 60g','latte 1lt','uova 6','sale 1kg','pepe 50g','pasta 500g','mele 6','miele 1l','farina 1kg',]
console.log(listaSpesa);

 for (let i = 0; i < 9; i++) {
    // dichiaro un elemento da id che voglio utilizzare nell html
   const text = document.getElementById('for') 
     text.innerHtml +="<li>"+(i + 1)+"</li>";
}

 let i = 0;

 while( i < listaSpesa.length){
     i++;
     const textList = document.getElementById('opposite'); 
     textList.innerHTML += "<li>"+(i + 1)+"</li>";
    }

  


