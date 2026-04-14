async function buscarDados(){
    try{
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!resposta.ok){
            throw new Error("Erro na rede");// Verfica se a resposta foi bem sucedida(200-299)
        }
        const dados = await resposta.json();// converte a resposta em formato JSON
        console.log(dados);
    }  catch(erro){
        console.error("Houve um problema com a resquisição: " + erro);
    }
}
buscarDados();