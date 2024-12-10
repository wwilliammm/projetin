// Pizzaria Sabores está com promoção.
// Comprando uma pizza na terça ou sexta, o frete é grátis.
let diaSemana = "sexta";

if(diaSemana == "terça" || diaSemana == "sexta") {
    console.log("[PROMO] - Frete Grátis.");
} else {
    console.log("Desculpe, nesse dia você pagará frete!");
}