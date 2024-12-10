// Construir um programa onde um vendedor irá digitar quanto ele vendeu em um mês na loja. Caso esse total de vendas seja maior ou igual a R$ 10.000, o programa irá calcular uma comissão de 4% sobre suas vendas, mas caso a venda seja menor, o programa calculará apenas 2%.
let vendasMes = 18000; // escopo global
let metaMes = 10000; // escopo global
let comissao = 0; // escopo global

if(vendasMes >= metaMes) {
    comissao = vendasMes * 0.04; //escopo local 
    console.log(`
    ============================================
        SUAS VENDAS FORAM DE R$ ${vendasMes}
        SUA COMISSÃO SERÁ DE R$ ${comissao}
    ============================================
    `);

} else if(vendasMes < metaMes) {
    comissao = vendasMes * 0.02; //escopo local 
    console.log(`
    ============================================
        SUAS VENDAS FORAM DE R$ ${vendasMes}
        SUA COMISSÃO SERÁ DE R$ ${comissao}
    ============================================
    `);
} else {
    console.log(`
    ================================================
    @@@ D I G I T E  U M  V A L O R  V Á L I D O @@@
    ================================================
    `);
}


