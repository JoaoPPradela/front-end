function pagina(){

    const body = document.body;
    
    const div = document.createElement('div');
    div.classList.add('container');
    body.appendChild(div);

    const titulo = document.createElement('h2');
    titulo.textContent = "Lista de Tarefas";
    div.appendChild(titulo);

    const input = document.createElement('input');
    input.id = 'tarefaInput';
    input.type = 'text';
    input.placeholder = 'Digite uma tarefa';
    div.appendChild(input);

    const botao = document.createElement('button');
    botao.textContent = 'Adicionar Tarefa';
    botao.id = 'btnAdicionar';
    div.appendChild(botao);
    
    const lista = document.createElement('ul');
    lista.id = 'listaTarefas';
    div.appendChild(lista);

    



    
    botao.addEventListener('click', ()=>{
        //Criar novo elemento a list
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

        novaTarefa.addEventListener('click', () => {
            const tarefa = novaTarefa.getAttribute('data-tarefa');
            console.log('Removendo: ', tarefa);
            novaTarefa.classList.remove('destque');
            novaTarefa.classList.add('removido');
            novaTarefa.innerHTML += ' (removida)';
            setTimeout(()=>{lista.removeChild(novaTarefa);},1000);

            input.value = "";
        });

    });

};