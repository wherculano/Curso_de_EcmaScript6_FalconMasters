//Desestruturando(Desempacotando) Objetos (dicionarios no Python)
const usuario = {
    nome: 'Wagner',
    email: 'wagner@email.com',
    idade: 30,
    pais: 'Brasil',
    profissao: 'Analista Financeiro'
}

// console.log(usuario.email)
const {nome, pais, hobby='Programador'} = usuario; 
console.log(nome, pais, hobby)
/*
neste caso acima, não foi necessário o uso da virgula para ignorar os outros valores
pois foi utilizado como nome de variavel o mesmo valor das chaves do Objeto.
E assim como em vetores, pode-se incluir novos parametros no resultado, neste caso: hobby.
hobby é incluido apenas no resultado e não no Objeto original
*/
console.log(usuario)

//desestruturando um objeto com arrow function
const mostrarInfo = ({nome, idade}) => console.log(`${nome} tem ${idade} anos.`);
mostrarInfo(usuario);
/*
com objetos basta utilizar as {} sem a necessidade de passar o objeto.
mostrarInfo = ({nome, idade} = usuario) => ... Nao é necessario!
Ja que ele ja será passado como parametro para a função.
Diferente de quando é com Vetor, pois se for ignorar algo é preciso estar explicito na funcao.
mostrarInfo = ([nome, idade, , , ] = dados) => ....
*/
