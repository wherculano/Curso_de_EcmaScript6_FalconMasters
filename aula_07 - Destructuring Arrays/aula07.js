//Desestruturando(Desempacotando) Vetores
const dados = ['Wagner', 30, 'Brasil', 'Programador']

// const nome = dados[0];
// const idade = dados[1];
// foi atualizado para:

const [nome, idade, , ,] = dados;
//as virgulas após a idade [nome, idade, , ,] significa que estou ignorando os proximos elementos
console.log(`Nome: ${nome}, idade: ${idade}`)

//adicionando elemento que nao consta no vetor original e ignorando idade, pais e profissao
const [nombre, , , , ciudad='Sao Paulo'] = dados
console.log(`Nome: ${nombre}, Cidade: ${ciudad}`)

//Função Flecha (Arrow Function)
const mostrarInfo = ([name, age, ,] = dados)  => `Nome: ${name}, Idade: ${age}`
console.log(mostrarInfo(dados))//array que foi criado na linha 2

