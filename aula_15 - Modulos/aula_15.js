const Pessoa = require('./classePessoa'); // importa o arquivo classePessoa no local indicado (neste caso, mesmo diretório)

const wagner = new Pessoa('Wagner Herculano', 30); //iinstancia um novo objeto Pessoa
wagner.buscaCaracteresDoInicioAoTamanhoDesejado(3,7);
wagner.buscaCaracteresDoInicioAoLimiteDesejado(3,7);
wagner.mostrarInfo();
