 function desenharCarrinhoDeCompras(carrinho, containerHTML, totalHTML){

    //Esvaziando o containerHTML antes do for preenhê-lo:
    containerHTML.innerHTML = '';
    


    for(let i=0; i< carrinho.listaDeProdutos.length; i++){
        containerHTML.innerHTML += `
       <div class='card'>
       <span> ${carrinho.listaDeProdutos[i].id}</span>
       <span> ${carrinho.listaDeProdutos[i].descricao}</span>
       <span> ${carrinho.listaDeProdutos[i].MarcaDoProduto}</span>
       <span>R$ ${carrinho.listaDeProdutos[i].precoUnitario}</span>
        </div>
        `;

    }
    totalHTML.innerHTML = `Preço Total: R$ ${carrinho.calcularTotal()}`;
 }