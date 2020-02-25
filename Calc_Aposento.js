// Aposentadoria com 2 opções de cálculo e comparação

const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

// Opção 1 - mais linhas
const aposento1 = idade + contribuicao

if (aposento1 >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
    }
else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

// Opção 2 - menos linhas
const aposento2 = (sexo == 'F' && ((idade + contribuicao) >= 85)) ? `${nome}, você pode se aposentar!` : `${nome}, você ainda não pode se aposentar!`
console.log(aposento2)