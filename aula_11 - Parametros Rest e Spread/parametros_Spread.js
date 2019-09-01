//Spread operator transforma um array em parâmetros.
const mostrarDados = (...dados) => {
    console.log(dados);
}

listaDeDados = ['Danielle', 30, 'danielle@email.com', 'Brasil'];
mostrarDados(...listaDeDados);
