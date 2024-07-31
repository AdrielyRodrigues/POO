let séries1 = {
poster: "grey.jpg" ,
nome:"grey's anatomy",

atorPrincipal:{
    nome :" Ellen Pompeo.",
    dataDeNascimento :`1969`,
    nacionalidade : "norte-americana"
    
},
    

temporadas : 20,
anoDeLancamento :2005,

}
let séries2 = {
    poster: "bomdia.jpg" ,
    nome:"Bom Dia, Verônica",
    
    atorPrincipal:{
        nome : "Tainá Müller",
        dataDeNascimento :"1982",
        nacionalidade : "Brasileira"
        
    },
        
    
    temporadas : 3,
    anoDeLancamento :2020,
    

}
let séries3 = {
    poster: "sintonia.jpg",
nome:"Sintonia",

atorPrincipal:{
    nome :"Jottapê",
    dataDeNascimento : "2000",
    nacionalidade : "Brasileira"
    
},
    

temporadas : 4,
anoDeLancamento :2019,


}
let séries4 = {
    poster: "frends.jpg" ,
nome:"Friends",

atorPrincipal:{
    nome : "Jennifer Aniston",
    dataDeNascimento :"1969",
    nacionalidade: "Norte-americana"
    
},
    

temporadas : 10,
anoDeLancamento :1994,


}
let séries5 = {
    poster: "lacasa.jpg",
nome:"la casa de papel",

atorPrincipal:{
    nome  :"Álvaro Morte ",
    dataDeNascimento : "1975",
    nacionalidade: "espanhola"
},
    

temporadas : 5,
anoDeLancamento : 2017,

}
let séries6 = {

poster:" stranger.avif" ,
nome:"Stranger Things",

atorPrincipal: {
    nome: "Millie Bobby Brown",
    dataDeNascimento : " 2004",
    nacionalidade :"Britranica"
}
,



temporadas : 4,
anoDeLancamento: 2016 ,
}

let séries7 = {
    poster: "sex.jpg",
    nome:"sex Education",
    
    atorPrincipal:{
        nome :"Asa Butterfield",
        dataDeNascimento : " 1997",
        nacionalidade: "Britânico"
        
},
        
    
    temporadas : 4,
    anoDeLancamento : 2019,
    
}
let séries8 = {
    poster: "the.jpg",
    nome:"The 100",
    
    atorPrincipal:{
        nome :`Eliza Taylor`,
        dataDeNascimento: `1989`,
        nacionalidade: `Australiana`
        
    },
        
    
    temporadas : 7,
    anoDeLancamento : 2014,
    
}
let séries9 = {
    poster: "river.jpg",
nome:"Riverdele",

atorPrincipal:{
    nome: `Lili Reinhart`,
    dataDeNascimento: `1996`,
    nacionalidade: `norte-americana
    `
    
},
    

temporadas : 7,
anoDeLancamento : 2017,

}
let séries10 = {
    poster: "good.jpg",
nome:"Good Girls",

atorPrincipal:{
    nome :`Manny Montana `,
    dataDeNascimento: `1983`,
    nacionalidade: `americano `
    
},
    

temporadas : 4,
anoDeLancamento :2018,

}

    let top5 =[ séries1, séries3,séries10,séries9,séries8
];

for (let i = 0; i < top5.length; i++){
    document.write(`

    <div class="card">
    <img class="poster" src="img/${top5[i].poster}">
       <div class="info">
       <span class="Titulo">${top5[i].atorPrincipal.nome}</span>
       <span class="Titulo">${top5[i].atorPrincipal.dataDeNascimento}</span>
       <span class="Titulo">${top5[i].atorPrincipal.nacionalidade}</span>
       
         </div>
        <p class="temporadas">${top5[i].temporadas}</p>
        <p class="anodelancamento">${top5[i].anoDeLancamento}</p>
       
    </div>
    
    `)}

let lancamentos = [ séries2, séries4,séries5,séries7,séries6
]


for (let i = 0; i < lancamentos.length; i++){
    document.write(`

    <div class="card">
    <img class="poster" src="img/${lancamentos[i].poster}">
       <div class="info">
       <span class="Titulo">${lancamentos[i].atorPrincipal.nome}</span>
       <span class="Titulo">${lancamentos[i].atorPrincipal.dataDeNascimento}</span>
       <span class="Titulo">${lancamentos[i].atorPrincipal.nacionalidade}</span>
       
         </div>
        <p class="temporadas">${lancamentos[i].temporadas}</p>
        <p class="anodelancamento">${lancamentos[i].anoDeLancamento}</p>
       
    </div>
    
    `)}