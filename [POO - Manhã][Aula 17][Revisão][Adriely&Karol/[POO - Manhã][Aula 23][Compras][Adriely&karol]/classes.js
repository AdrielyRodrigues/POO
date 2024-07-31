class Produto {

    constructor(id, foto, descricao,MarcaDoProduto, precoUnitario,){

        this.id = id;
        this.foto = foto;
        this.descricao = descricao;
        this.MarcaDoProduto = MarcaDoProduto;
        this.precoUnitario = precoUnitario;
       
    }
}

class CarrinhoDeCompras{

    constructor(){

        this.data = '20/07/2024'
        this.listaDeProdutos = []


    }
    

    adicionarProduto(produto){

        if(produto instanceof Produto){

            this.listaDeProdutos.push(produto);
            
        } else{
            console.error('Só é possível adicionar objetos da classe Produto')
        }
    }
    
    

 calcularTotal(){
    let total = 0; 
    for(let i = 0; i< this.listaDeProdutos.length; i++){
        total += Number(this.listaDeProdutos[i].precoUnitario)
    }    
    return total;
    
    
         
    
 } 
   
}
