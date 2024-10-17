function desenharCards(tagContainer, listaDeDesenhos){
    tagContainer.innerHTML = '';

    for(let i = 0; i < listaDeDesenhos.length; i++) {
        tagContainer.innerHTML += `
            <div class= 'card'>
                <img src='img/${listaDeDesenhos[i].poster}' class='poster'>
                <span class='texto'> ${listaDeDesenhos[i].titulo} </span>
                <span class='texto'> ${listaDeDesenhos[i].autor} </span>
                <span class='texto'>${listaDeDesenhos[i].genero} </span>
                <span class='texto'>${listaDeDesenhos[i].anoDeLancamento} </span>
            </div>
   `;
 }
}

function desenharMensagem(tagContainer){
    tagContainer.innerHTML=`<span class="erro">Não foi encontrado nenhum desenho com essas informações</span>`
}