// Construir uma página para uma empresa de serviços. O operador irá digitar o salário de um cliente. Se o salário for maior ou igual que R$ 3.000,00, o programa irá escrever na tela “Oferecer Plano Alfa” e, caso seja menor, o programa escreverá “Oferecer Plano Beta”.
let salarioCliente = 3500;
if(salarioCliente >= 3000) {
    console.log("OFERECER PLANO ALFA");
} else if(salarioCliente < 3000) {
    console.log("OFERCER PLANO BETA");
} else {
    console.log("DIGITE UM VALOR VÁLIDO!");
}