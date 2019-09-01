//permite passar um numero indefinido de parametros para a função e transforma-os em um array
const mostrarDados = (...dados) => {
    console.log(dados);
}

mostrarDados('Wagner', 30, 'wagner@email.com', 'Brasil')
