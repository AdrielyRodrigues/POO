// Crie em javascript os objetos desenhados no quadro:
//ClienteB e ClienteC


 let ClienteB = {
nome :'Cleito Rasta ',

CPF :  '222.222.222-22',

Endereço:{
    Rua: 'Tal',
    numero: 15,
    bairro: 'Centro',
    cidade: 'Cajueiro',
    estado:'Alagoas'
}


 };
 console.log(ClienteB.Endereço.cidade);

 let ClienteC = {
    Nome: 'Maria',
    Pedidos:[
        {
            totalProdutos: 320,
            frete: 15
        },
        {
            totalProdutos: 500,
            frete: 72
        }
    ]
}
console.log(ClienteC.Pedidos[1].frete);