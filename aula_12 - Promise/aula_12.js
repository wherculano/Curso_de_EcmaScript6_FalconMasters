/*
Promessas: Permite esperar que algo aconteça
e independente se acontecer ou não, será executado
*/

let promessa = new Promise( (resolve, reject) => {
    //ação que se deseja executar
    setTimeout(() =>{
        const exito = true
        if(exito){
            //se o que deseja na pagina der certo. Este bloco será executado
            resolve('Executado com Sucesso!');
        }else{
            //se o que deseja na pagina der errado. Este bloco será executado
            reject('[Erro]: Algo deu errado!');
        }
    }, 2000) //espera 2 segundos para executar
});

//se der tudo certo (true) sera executado
promessa.then((msg) => {
    alert(msg)
});

//se tiver algum erro (false) será executado
promessa.catch((msg) =>{
    alert(msg)
})
