class ContaDeEnergia{

    constructor(DadosPessuais,multa,DataDeVencimento,TaxaDeIluminaçãoPública,ValorPago){

        this.DadosPessuais = DadosPessuais;
        this.multa = multa;
        this.DataDeVencimento = DataDeVencimento;
        this.TaxaDeIluminaçãoPública = TaxaDeIluminaçãoPública;
        this.ValorPago = ValorPago;

    }
    

} 

class ContaDeAgua{

    constructor(nomeDoCliente,DataDaLeitura,Endereço,ValorDaÁgua,TaxaFixa){

        this.nomeDoCliente = nomeDoCliente;
        this.DataDaLeitura = DataDaLeitura;
        this.Endereço = Endereço;
        this.ValorDaÁgua = ValorDaÁgua;
        this.TaxaFixa = TaxaFixa;
        

    }
}