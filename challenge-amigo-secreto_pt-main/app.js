//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && isNaN(nome) && !amigos.includes(nome)) {
        amigos.push(nome);
        input.value = '';
        atualizarLista();
    } else if (!isNaN(nome)) {
        alert('Por favor, não insira números. Digite um nome válido!');
    } else if (amigos.includes(nome)) {
        alert('O nome do amigo já foi adicionado!');
    } else {
        alert('Por favor, digite um nome válido!');
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos diferentes para sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceSorteado, 1)[0]; // Remove o amigo sorteado da lista
    const resultado = document.getElementById('resultado');
    
    if (amigoSorteado) {
        resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
        resultado.style.display = 'block';
        atualizarLista(); // Atualiza a lista exibida
    } else {
        alert('Ocorreu um erro ao sortear. Por favor, tente novamente.');
    }
}

document.getElementById('button-add').addEventListener('click', adicionarAmigo);
document.getElementById('button-draw').addEventListener('click', sortearAmigo);