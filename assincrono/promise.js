const vizualizador = (algo) => console.log(algo);

let minhaPromessa = new Promise((resolve, reject) => {
    let ok = false;

    setTimeout(()=> ok = true, 3000);

    if (ok){
        resolve('ok');
    } else{
        reject('Erro');
    }

});

minhaPromessa.then(
    (valor) => vizualizador(valor),
    (razao) => vizualizador(razao)
)	