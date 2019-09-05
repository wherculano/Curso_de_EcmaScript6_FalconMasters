class Pessoa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }

    buscaCaracteresDoInicioAoTamanhoDesejado(inicio, fim){
        //substr(inicio, tamanho total de caracteres a serem retornados)
        console.log(`Começa do ${inicio}º caracter e vai até o tamanho de ${fim} caracteres --> \"${this.nome.substr(inicio, fim)}\".`);
    }

    buscaCaracteresDoInicioAoLimiteDesejado(inicio, fim){
        //substring(incio, final da string)
        console.log(`Começa do ${inicio}º caracter e vai até o ${fim}º caracter (-1) --> \"${this.nome.substring(inicio, fim)}\".`)
    }

    mostrarInfo(){
        console.log(`Nome: ${this.nome} Idade: ${this.idade}`)
    }
}

module.exports = Pessoa; // deixa o módulo disponível para outros poderem importa-lo
