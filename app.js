let amigos = [];
let textoInserido = document.getElementById('amigo');


function adicionarAmigo() {
    if (textoInserido.value.trim()==="") {
        alert('Por favor, insira um nome!');
    }else {
        if (amigos.includes(textoInserido.value.trim())) {
      alert('Este amigo já foi adicionado!');
    } else {
        amigos.push(textoInserido.value);
        console.log('amigo adicionado:', textoInserido.value);
        console.log('lista de amigos:', amigos);

        atualizarListaDeAmigos();
    }
    limparCampo();
}}

function limparCampo() {
    textoInserido.value='';
}

function atualizarListaDeAmigos() {
    const listaAmigosDiv = document.getElementById('listaAmigos'); 
    listaAmigosDiv.innerHTML = '';
    amigos.forEach(amigo => {
      const li = document.createElement('li');
      li.textContent = amigo; 
      listaAmigosDiv.appendChild(li);
    });
  }

function sortearAmigo() {
    if (amigos.length === 0){
        alert('Não há amigos para sortear!');
    }else {
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        // Obtém o nome sorteado
        const amigoSorteado = amigos[indiceAleatorio];
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

        amigos = [];
        atualizarListaDeAmigos();
    }
}


adicionarAmigo();
sortearAmigo();
