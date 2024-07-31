let pedido =
 {
    numeropedido: 108,

        Cliente : {
      nome: "Fulano da silva",
      cpf: "000.000.000-00",
      Endereco: "Rua das Àrvores, N° 1"
 },
    Produtos: [
        {
            descricao: 'Capacete',  
           precounitario: 500.00,
           quantidade: 1},
   
            {
                descricao: 'Cotovelera',
                precounitario: 85.00,
                quantidade: 2,
            }
]
}
 document.write(` 
 <div>PEDIDOS</div>

 <div>Número do pedido: ${pedido.numeropedido} </div>
 <div>Cliente: ${pedido.Cliente.nome}</div>
 <div>CPF: ${pedido.Cliente.cpf} </div>
 <div>Endereco de entrega: ${pedido.Cliente.Endereco} </div> 
 <hr>
 ` );

 for (let i = 0; i < pedido.Produtos.length; i++) {
    document.write(`
    <div>
        <span>${pedido.produtos[i].descricao}</span>
        <span>${pedido.produtos[i].precoUnitario}</span> x
        <span>${pedido.produtos[i].quantidade}</span> =
        $pedido
    `)
 }
 