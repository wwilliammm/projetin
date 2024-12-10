// Exemplo:
let saboresPizza = ["calabresa", "mussarela", "marguerita"];

for(let contador = 0;contador < saboresPizza.length;contador++){
    console.log(saboresPizza[contador]);
}


let contador = 0;
while(contador < saboresPizza.length){
    console.log("Sabor: " + saboresPizza[contador]);
    // contador = contador + 1; // incremento
    contador++;       // incremento
}