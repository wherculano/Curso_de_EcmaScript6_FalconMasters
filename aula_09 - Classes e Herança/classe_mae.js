class Usuario{
    constructor(nome, idade, email='Nao informado'){
        this.nome = nome,
        this.idade = idade,
        this.email = email //nao se usa virgula no ultimo elemento
    }

    //método com passagem de parametro
    mostrarCumprimento(msg){
        return msg
    }

    mostrarInfo(){
        return `
        <strong>Nome:</strong> ${this.nome} </br>
        <strong>Idade:</strong> ${this.idade} </br>
        <strong>E-mail:</strong> ${this.email} </br>
        <hr>
        `
    }
}

const wagner = new Usuario('Wagner', 30)
console.log(wagner.nome)
document.write(wagner.mostrarInfo());

