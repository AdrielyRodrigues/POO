let MU1 = {
    Titulo:'Exagerado',
    Artistas: 'Cazuza',
    Album: ' Exagerado Musical',
    poste: 'MU1.jpg',
    video: `ZBwjT-3t2O8?si=rSuxIl0CVrGDenGO`
    
}

let MU2 = {
    Titulo:'Negro drama',
    Artistas: 'Racionais MCs',
    Album: 'Nada como um Dia após o Outro Dia', 
    poste: 'MU2.jpg',
    video:`tWSr-NDZI4s?si=KIV6bfDf-X4do057`
}

let MU3 = {
    Titulo:'Capítulo 4, versículo 3',
    Artistas: 'Racionais MCs',
    Album: ' Sobrevivendo no Inferno',
    poste: 'MU3.jpg',
    video:`YLa77FGfkY8?si=gf4WhQz50309DLk2 `

}
let MU4 = { 
    Titulo:'Pétala',
    Artistas: 'Djavan',
    Album: 'Luz',
    poste: 'MU4.jpg',
    video:`Co2AK_23Ca4?si=WCpMY_oY_DzlrUT-`
}
let MU5 = {
    Titulo:'Rosyln',
    Artistas: 'Bon Iver, St. Vincent',
    Album: 'The Twilight Saga: New Moon – Original Motion Picture Soundtrack',
    poste: 'MU5.jpg',
    video:`MZSCXE4CpCA?si=S1j-TkMvWw0Iyxxs`
}
let MU6 = {
    Titulo:'Amanhecer',
    Artistas: 'Nansy Silvvz, BK',
    Album: 'Icarus',
    poste: 'MU6.jpg',
    video:`N5TVWZfRfIs?si=9TxHbtUDChZnxnBT`
}

let MU7 = {
    Titulo:' Deixa Acontece',
    Artistas: 'Grupo Revelação',
    Album: 'Nosso Samba Virou Religião',
    poste: 'MU7.jpg',
    video:`wo4pWZApd2Y?si=WTXk-Q2tW-rw_qST`

}

let MU8= {
    Titulo:'Lets Go 4',
    Artistas: 'Mc IG, MC PH, MC Ryan SP, DJ GBR, Mc Luki',
    Album: 'Lets Go ',
    poste: 'MU8.jpg',
    video: `zG5gWncAhls?si=PKwQGfibZcdAkA3w" >`

}
let MU9 = {
    Titulo:'Leão',
    Artistas: 'Marília Mendonça',
    Album: 'Decretos Reais',
    poste: 'MU9.jpg',
    video:`tI55Zu9uZEM?si=QnBEFMWT4W9l9JFh`
}
let MU10= {
    Titulo:'Os Menino Tá Com o Pacote',
    Artistas: ' O Cara Do Momento',
    Album: 'MC PH, Murillo e LT no Beat',
    poste: 'MU10.webp',
    video:`CogD1olVZYk?si=tnsnJPaGXkxhv0n8`

}
let listaDemusicas = []
listaDemusicas.push(MU1)
listaDemusicas.push(MU2)
listaDemusicas.push(MU3)
listaDemusicas.push(MU4)
listaDemusicas.push(MU5)
listaDemusicas.push(MU6)
listaDemusicas.push(MU7)
listaDemusicas.push(MU8)
listaDemusicas.push(MU9)
listaDemusicas.push(MU10)

console.log("imprimindo com o for")
for (let i = 0; i < listaDemusicas.length; i++) {

    console.log(`${listaDemusicas[i].Titulo} , ${listaDemusicas[i].Artistas} , ${listaDemusicas[i].Album}`)
}
/////////////////////////////
for (let i = 0; i < listaDemusicas.length; i++){
    document.write(`

    <div class="card">
    <img class="poste" src="img/${listaDemusicas[i].poste}">
       <div class="info">
        <span class="Titulo">${listaDemusicas[i].Titulo}</span>
        <span class="Artista">${listaDemusicas[i].Artistas}</span>
         </div>
        <p class="Album">${listaDemusicas[i].Album}</p>
        <iframe width="25" height="25" src="https://www.youtube.com/embed/${listaDemusicas[i].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    
    `);

}