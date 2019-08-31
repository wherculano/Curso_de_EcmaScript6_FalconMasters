//const - variavel que nao pode ser alterada (constante)
const nomes = ['Wagner', 'Matheus', 'Milena', 'Danielle'];

//função que permite iterar sobre todos os elementos e aplicar uma função a cada um
const num_de_caracteres_1 = nomes.map(function(nome){
    console.log(`${nome} tem ${nome.length} letras`);
})

//Arrow Functions
/*
(param) => {
    return code
}

ou

(param) => {code}
*/

console.log('-'.repeat(25));

const num_de_caracteres_2 = nomes.map((nome) => {
    return `${nome} tem ${nome.length} letras`;
})
console.log(num_de_caracteres_2)

console.log('-'.repeat(25))

//quando se usa apenas uma linha o return e {} nao são necessarios
// e quando há apenas um parametro, não é necessario o uso dos ()
const num_de_caracteres_3 = nomes.map(nome => `${nome} tem ${nome.length} letras.`);
console.log(num_de_caracteres_3)

