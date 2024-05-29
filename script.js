function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const ul = document.getElementById('tarefas');

    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.onclick = function() {
            ul.removeChild(li);
        };
        ul.appendChild(li);
        input.value = "";
    }
}

