function registrarUsuario(nome, pais='Não informado', email, telefone='Não informado'){
    return `Nome: ${nome}, Pais: ${pais}, E-mail: ${email}, Telefone: ${telefone}`
}

console.log(registrarUsuario('José', 'Brasil', 'jose@email.com'))
console.log('-'.repeat(75))
console.log(registrarUsuario('João', undefined, 'joao@email.com'))
console.log('-'.repeat(75))
console.log(registrarUsuario('Maria', 'Brasil', 'maria@email.com', '5555-8888'))
