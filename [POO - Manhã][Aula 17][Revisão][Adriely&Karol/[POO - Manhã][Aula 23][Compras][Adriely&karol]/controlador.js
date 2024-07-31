// "pegando" elementos  do html e colocando em variáveis:

let inputId = document.getElementById('iptId');
let inputDescricao = document.getElementById('iptDescricao');
let inputPrecoUnitario = document.getElementById('iptPrecoUnitario');
let buttonAdicionar = document.getElementById('btnAdicionar');
let containerCards = document.getElementById('containerCards');
let cTotal = document.getElementById('containerTotal');
let inputmarca =  document.getElementById('iptMarcaDoProduto');
// Criando o objeto carrinhoDeCompras:
let carrinhoDeCompras = new CarrinhoDeCompras();



//função que será chamada o botão adicionar for clicando:
function quandoClicarNoBotao(){

    // Criação de um objeto da classe Produto,
    // O construtor está pegando valores do Input 
    console.log(inputDescricao.value);

    let produtoTemporario = new Produto (

        inputId.value,
        '',
        inputDescricao.value,
        inputmarca.value,
        inputPrecoUnitario.value
 );

        //Adicionar p produtoTemporario ao carrinhoDeCompras:
       carrinhoDeCompras.adicionarProduto(produtoTemporario);

       console.log(carrinhoDeCompras);

        desenharCarrinhoDeCompras(carrinhoDeCompras, containerCards, cTotal);

        console.log(carrinhoDeCompras.calcularTotal());


}

//Adicionardo um "fofoqueiro" ao Adicionar
//sempre que o botão for clicando o 
//fofoquero  irá chamar a função quandoClicarNoBotão
buttonAdicionar.addEventListener('click',quandoClicarNoBotao);


