class Conta{ 

    
    constructor(nomeDoTitular, agencia, numero,saldo) {
        this.nomeDoTitular = nomeDoTitular;
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldo;
        
    }
    // Abaixo do costrutor podemos definir açoes para classes 
    //consequentimente,todos os objetos dessa calsse podem usar essas açoes
    exibirDados(){
        console.log(`Nome: ${this.nomeDoTitular} -> $ ${this.saldo}`);

    }
}
