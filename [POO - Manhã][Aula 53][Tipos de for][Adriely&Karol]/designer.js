function desenharCards(tagContainer, lista){
    tagContainer.innerHTML = '';

    for (const time of lista){
        tagContainer.innerHTML += `
            <div class='card'>
            <img class= 'escudo' src='img/${time.fotoEscudo}' >
            <span class='titulo'> ${time.nome}</span>
            <span class='texto'> ${time.estadoDeOrigem}</span>
            <span class='texto'> ${time.anoDeFundacao}</span>

            </div>
        `;

    }




   /* for (let i = 0; i < lista.length; i++) {
        lista
        
    }*/
}