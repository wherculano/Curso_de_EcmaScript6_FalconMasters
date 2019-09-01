//function criarObjeto(nome, idade)
const criarObjeto = (nome, idade) => {
    return {
        nome,  // mesma coisa que fazer -> nome: nome,
        idade, // mesma coisa que fazer -> idade: idade
        mostrarInfo(){
            return `${nome} tem ${idade} anos.`
        }
    }
}

console.log(criarObjeto('Wagner', 30).mostrarInfo())