function desenharCards(tagContainer, lista){
    tagContainer.innerHTML = '';

    for (const time of lista){
        tagContainer.innerHTML += `
            <div class='card'>
            <img class= 'escudo' src='${time.fotoEscudo}' >
            <span class='titulo'> ${time.nome}</span>
            <span class='texto'> ${time.estadoDeOrigem}</span>
            <span class='texto'> ${time.anoDeFundacao}</span>

            </div>
        `;

    }


0

   /* for (let i = 0; i < lista.length; i++) {
        lista
        
    }*/
}