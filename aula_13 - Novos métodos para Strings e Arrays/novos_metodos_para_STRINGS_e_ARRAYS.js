const texto = 'Hello World!';

//metodos para deixar tudo minusculo e depois verificar se a palavra começa com tal letra.
console.log(`${texto} 'começa com h? ->' ${texto.toLowerCase().startsWith('h')}`)

//metodos para deixar tudo minusculo e depois verificar se a palavra termina com tal letra.
//neste caso acima dará false porque termina com "!" e não com "d"
console.log(`${texto} termina com d? -> ${texto.toLowerCase().endsWith('d')}, porque na verdade termina com \'${texto.slice(-1)}\'`)

//verifica se a palavra está inclusa na string
console.log(`${texto} possui a palavra "World" ? -> ${texto.includes('World')}`)

//verifica se a palavra está inclusa no Array
const amigos = ['Wagner', 'Herculano', 'dos Santos']
console.log(amigos.includes('Herculano'))
console.log(amigos.includes('Danielle'))

//pesquisar elemento no Array. Será retornado o primeiro elemento que cumpra a condição
console.log(amigos.find(amigo => amigo.length > 6 ))

//dois modos de procurar o indice de um elemento dentro do Array. Se for retornado -1 é porque o elemento não está presente no Array
console.log(amigos.findIndex(amigo => amigo === 'dos Santos'))
console.log(amigos.indexOf('Herculano'))
