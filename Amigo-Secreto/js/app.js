let amigos = [];

// Adiciona um amigo à lista
function adicionar() {
    let inputAmigo = document.getElementById('nome-amigo');
    let nome = inputAmigo.value.trim();
    
    if (nome === '') {
        alert("Por favor, insira um nome.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarListaAmigos();
    inputAmigo.value = '';
}

// Atualiza a visualização da lista de amigos
function atualizarListaAmigos() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    
    amigos.forEach((nome) => {
        let li = document.createElement('li');
        li.textContent = nome;
        li.style.cursor = 'pointer';
        li.title = 'Clique para remover este amigo';
        li.addEventListener('click', () => removerAmigo(nome));
        lista.appendChild(li);
    });
}

// Remove um amigo da lista
function removerAmigo(nome) {
    let index = amigos.indexOf(nome);
    if (index !== -1) {
        amigos.splice(index, 1);
        atualizarListaAmigos();
    }
}

// Realiza o sorteio de amigo secreto
function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos.');
        return;
    }
    
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let proximo = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        sorteio.innerHTML += `${amigos[i]} --> ${proximo}<br/>`;
    }
}

// Embaralha a lista de amigos usando Fisher-Yates
function embaralhar(lista) {
    for (let i = lista.length; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

// Reinicia o sorteio e a lista de amigos
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
