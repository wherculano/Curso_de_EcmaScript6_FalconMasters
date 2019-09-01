//Herdando dados da classe Usuario
class Estudante extends Usuario{
    constructor(nome, idade, email, profissao){
        super(nome, idade, email); //passando os parametros para a classe mãe
        this.profissao = profissao; //criando novo atributo
    }

    //sobrecarga de metodo para poder printar o novo atributo (profissao)
    mostrarInfo(){
        return `
        <strong>Nome:</strong> ${this.nome} </br>
        <strong>Idade:</strong> ${this.idade} </br>
        <strong>E-mail:</strong> ${this.email} </br>
        <strong>Profissão:</strong> ${this.profissao} </br>
        <hr>
        `
    }
}

const herculano = new Estudante('Herculano', 33, 'herculano@email.com', 'Programador Sênior')
document.write(herculano.mostrarInfo());
console.log(herculano);
console.log(herculano.mostrarCumprimento('Olá mundo!'));
