// IMC com 2 opções de cálculo e comparação

const  nome  =  'Carlos'
const peso = 84
const  altura  =  1.88

// Opção 1 - mais linhas
const imc1 = peso / (altura * altura)
if (imc1 >= 30) {
    console.log (`${nome} você está acima do peso.`)
}
else {
   console.log(`${nome} você não está acima do peso.`)
}

// Oção 2 - menos linhas
const  imc2 = ((peso / (altura**2)) >= 30) ? `${nome} você está acima do peso.` : `${nome} você não está acima do peso.`
console.log (imc2)