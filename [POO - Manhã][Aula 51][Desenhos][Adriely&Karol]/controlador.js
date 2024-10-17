let containerCards = document.getElementById('containerCards');
let iptTitulo = document.getElementById('iptTitulo');
let iptAutor = document.getElementById('iptAutor');
let iptGenero = document.getElementById('iptGenero');
let iptLancamento = document.getElementById('iptLancamento');
let btnFiltrar = document.getElementById('btnFilter')
// -------------------------------------------------------------

desenharCards(containerCards, listaDeDesenhos);

//--------------------------------------------------------------

function quandoClicarEmFiltrar(){

    let listafiltrada = listaDeDesenhos.filter( (lista) => (lista.titulo == iptTitulo.value ||
        lista.autor == iptAutor.value || lista.genero == iptGenero.value ||
        lista.anoDeLancamento == iptLancamento.value)
    );

    if(listafiltrada.length > 0 ){
        desenharCards(containerCards, listafiltrada );

    } else {
        desenharMensagem(containerCards);
    }
    

}

btnFiltrar.addEventListener('click', quandoClicarEmFiltrar);