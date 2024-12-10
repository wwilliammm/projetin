// Construir um programa onde o usuário saberá o valor do seu colesterol. Caso o valor seja menor ou igual que 180, o programa irá escrever na tela “Saúde Ok”; caso contrário, o programa escreverá na tela “Vamos procurar uma ajuda médica?”
let colesterolUsuario = 200;
const taxaColesterol = 180;

if(colesterolUsuario <= taxaColesterol) {
    console.log("====== S A U D E  O K ======");
} else if(colesterolUsuario > taxaColesterol) {
    console.log(" V A M O S  P R O C U R A R  U M  M É D I C O ?");
} else {
    console.log("@@@ D A D O  I N V Á L I D O @@@");
}