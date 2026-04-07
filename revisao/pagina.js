function pagina(){
    const input = document.getElementById('tarefaInput');
    const botao = document.getElementById('btnAdicionar');   
    const lista = document.getElementById('listaTarefas');   

    botao.addEventListener('click', ()=>{
        //Criar novo elemento a lista
        const novaTarefa = document.createElement('li');
        const texto = input.value.trim();

        if(texto === ""){
            alert('Digite algo!');
            return;
        };

        novaTarefa.textContent = texto; //Adiciona texto ao elemnto da lista
        novaTarefa.classList.add('destaque'); // adiciona a classe 'destaque  ao li'
        novaTarefa.setAttribute('data-tarefa', texto.toLowerCase()); // Adiciona trubuto personalizado
        novaTarefa.style.color = '#333';

        lista.appendChild(novaTarefa);// adiciona o elemento
        
        novaTarefa.addEventListener("click",() =>{
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo", tarefa);
            novaTarefa.classList.remove("destaque");
            novaTarefa.classList.add("removido");
            novaTarefa.innerHTML += "(removida)";
            setTimeout(() => {lista.removeChild(novaTarefa);}, 2000);

            input.value = ""; // Limpa o campo de entrada
        });

    });

};
