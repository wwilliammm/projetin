// O(a) professor(a) irá digitar a nota tirada pelo aluno. 

// 1. Caso seja menor do que 0 ou maior do que 10, o programa irá escrever “Nota Inválida”; 
// 2. se for maior ou igual a 0 e menor do que 4, o programa irá escrever, “aluno reprovado”. 
// 3. Se a nota for maior ou igual a 4 e menor do que 7, o programa irá escrever “Aluno em Recuperação” 
// 4. e, caso seja maior ou igual a 7 e menor ou igual a 10, escreverá “Aluno Aprovado”.

// eles solicitaram que, no caso de o estudante ficar em recuperação, o programa deverá solicitar a digitação de mais uma nota. 
// Se essa nota for menor que 5, o programa escreverá “Reprovado na Recuperação” 
// e, caso contrário, “Aprovado na Recuperação”.


let nota = 6;

if(nota < 0 || nota > 10) {
    console.log("@@@ NOTA INVÁLIDA @@@");
} else if(nota >= 0 && nota < 4) {
    console.log("ALUNO REPROVADO.");
} else if(nota >= 4 && nota < 7) {
    console.log("ALUNO EM RECUPERAÇÃO.");
    let notaRecuperacao = 7;
    if(notaRecuperacao >=0 && notaRecuperacao <5) {
        console.log("REPROVADO NA RECUPERAÇÃO.");
    } else {
        console.log("APROVADO NA RECUPERAÇÃO.");
    }
} else if(nota >= 7 && nota <= 10) {
    console.log("ALUNO APROVADO.");
} else {
    console.log("@@@ DIGITE UM VALOR VÁLIDO! @@@");
}